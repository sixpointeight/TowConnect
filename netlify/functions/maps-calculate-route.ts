import { Handler } from '@netlify/functions';
import { Client, UnitSystem } from '@googlemaps/google-maps-services-js';

const client = new Client({});

// Constants from shared types
const OFFICE_ADDRESS = '2415 S University Ave, Little Rock, AR 72204, USA';
const RATES = {
  ENROUTE: 1.75,   // Office to pickup
  LOADED: 4.00,    // Pickup to dropoff
  DEADHEAD: 1.50,  // Dropoff back to office
  HOOKUP: 85.00    // Base hookup fee
};

export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      console.error('Google Maps API key not found');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Google Maps API key not configured' }),
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request body is required' }),
      };
    }

    const request = JSON.parse(event.body);
    
    if (!request.pickupAddress || !request.dropoffAddress) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Pickup and dropoff addresses are required' }),
      };
    }

    console.log('Calculating route for:', request.pickupAddress, 'to', request.dropoffAddress);

    // Calculate three legs of the journey
    // Leg 1: Office to Pickup (Enroute)
    // Leg 2: Pickup to Dropoff (Loaded)
    // Leg 3: Dropoff back to Office (Deadhead)

    const distanceMatrix = await client.distancematrix({
      params: {
        origins: [OFFICE_ADDRESS, request.pickupAddress, request.dropoffAddress],
        destinations: [OFFICE_ADDRESS, request.pickupAddress, request.dropoffAddress],
        units: UnitSystem.imperial, // Use miles
        key: apiKey,
      },
    });

    // Extract distances from the matrix
    // Matrix indices: 0=Office, 1=Pickup, 2=Dropoff
    const enrouteElement = distanceMatrix.data.rows[0]?.elements[1]; // Office to Pickup
    const loadedElement = distanceMatrix.data.rows[1]?.elements[2];  // Pickup to Dropoff
    const deadheadElement = distanceMatrix.data.rows[2]?.elements[0]; // Dropoff to Office

    if (!enrouteElement || !loadedElement || !deadheadElement) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Unable to calculate all route segments' }),
      };
    }

    if (enrouteElement.status !== 'OK' || loadedElement.status !== 'OK' || deadheadElement.status !== 'OK') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'One or more addresses could not be found' }),
      };
    }

    // Convert from meters to miles
    const enrouteMiles = enrouteElement.distance.value / 1609.34;
    const loadedMiles = loadedElement.distance.value / 1609.34;
    const deadheadMiles = deadheadElement.distance.value / 1609.34;

    // Calculate costs for each leg
    const enrouteRate = enrouteMiles * RATES.ENROUTE;
    const loadedRate = loadedMiles * RATES.LOADED;
    const deadheadRate = deadheadMiles * RATES.DEADHEAD;

    // Total cost including hookup fee
    const totalCost = enrouteRate + loadedRate + deadheadRate + RATES.HOOKUP;

    const calculation = {
      enrouteMiles: Math.round(enrouteMiles * 100) / 100, // Round to 2 decimal places
      loadedMiles: Math.round(loadedMiles * 100) / 100,
      deadheadMiles: Math.round(deadheadMiles * 100) / 100,
      enrouteRate: Math.round(enrouteRate * 100) / 100,
      loadedRate: Math.round(loadedRate * 100) / 100,
      deadheadRate: Math.round(deadheadRate * 100) / 100,
      hookupFee: RATES.HOOKUP,
      totalCost: Math.round(totalCost * 100) / 100,
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(calculation),
    };
  } catch (error) {
    console.error('Error in route calculation function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to calculate route rates' }),
    };
  }
};