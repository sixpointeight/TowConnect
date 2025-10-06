import { Handler } from '@netlify/functions';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

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
    
    if (!request.input) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Input is required' }),
      };
    }

    console.log('Processing autocomplete request for:', request.input);

    const response = await client.placeAutocomplete({
      params: {
        input: request.input,
        key: apiKey,
        ...(request.location && {
          location: `${request.location.lat},${request.location.lng}`,
          radius: request.radius || 50000, // Default 50km radius
        }),
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error in places autocomplete function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to get place suggestions' }),
    };
  }
};