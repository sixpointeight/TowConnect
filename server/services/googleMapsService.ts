import { Client, UnitSystem } from '@googlemaps/google-maps-services-js';
import { 
  DistanceMatrixRequest, 
  DistanceMatrixResponse, 
  PlaceAutocompleteRequest, 
  PlaceAutocompleteResponse,
  RouteCalculation,
  RouteRequest,
  OFFICE_ADDRESS,
  RATES
} from '@shared/types/maps';

export class GoogleMapsService {
  private client: Client;
  private apiKey: string;

  constructor() {
    this.client = new Client({});
    this.apiKey = process.env.GOOGLE_MAPS_API_KEY || '';
    
    if (!this.apiKey) {
      console.warn('Google Maps API key not found. Set GOOGLE_MAPS_API_KEY environment variable.');
    }
  }

  async getDistanceMatrix(request: DistanceMatrixRequest): Promise<DistanceMatrixResponse> {
    try {
      const response = await this.client.distancematrix({
        params: {
          origins: request.origins,
          destinations: request.destinations,
          units: UnitSystem.imperial, // Use miles
          key: this.apiKey,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error calling Distance Matrix API:', error);
      throw new Error('Failed to calculate distance');
    }
  }

  async getPlaceAutocomplete(request: PlaceAutocompleteRequest): Promise<PlaceAutocompleteResponse> {
    try {
      const response = await this.client.placeAutocomplete({
        params: {
          input: request.input,
          key: this.apiKey,
          ...(request.location && {
            location: `${request.location.lat},${request.location.lng}`,
            radius: request.radius || 50000, // Default 50km radius
          }),
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error calling Place Autocomplete API:', error);
      throw new Error('Failed to get place suggestions');
    }
  }

  async calculateRouteRates(request: RouteRequest): Promise<RouteCalculation> {
    try {
      // Calculate three legs of the journey
      // Leg 1: Office to Pickup (Enroute)
      // Leg 2: Pickup to Dropoff (Loaded)
      // Leg 3: Dropoff back to Office (Deadhead)

      const distanceMatrix = await this.getDistanceMatrix({
        origins: [OFFICE_ADDRESS, request.pickupAddress, request.dropoffAddress],
        destinations: [OFFICE_ADDRESS, request.pickupAddress, request.dropoffAddress],
      });

      // Extract distances from the matrix
      // Matrix indices: 0=Office, 1=Pickup, 2=Dropoff
      const enrouteElement = distanceMatrix.rows[0]?.elements[1]; // Office to Pickup
      const loadedElement = distanceMatrix.rows[1]?.elements[2];  // Pickup to Dropoff
      const deadheadElement = distanceMatrix.rows[2]?.elements[0]; // Dropoff to Office

      if (!enrouteElement || !loadedElement || !deadheadElement) {
        throw new Error('Unable to calculate all route segments');
      }

      if (enrouteElement.status !== 'OK' || loadedElement.status !== 'OK' || deadheadElement.status !== 'OK') {
        throw new Error('One or more addresses could not be found');
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

      return {
        enrouteMiles: Math.round(enrouteMiles * 100) / 100, // Round to 2 decimal places
        loadedMiles: Math.round(loadedMiles * 100) / 100,
        deadheadMiles: Math.round(deadheadMiles * 100) / 100,
        enrouteRate: Math.round(enrouteRate * 100) / 100,
        loadedRate: Math.round(loadedRate * 100) / 100,
        deadheadRate: Math.round(deadheadRate * 100) / 100,
        hookupFee: RATES.HOOKUP,
        totalCost: Math.round(totalCost * 100) / 100,
      };
    } catch (error) {
      console.error('Error calculating route rates:', error);
      throw new Error('Failed to calculate route rates');
    }
  }
}

export const googleMapsService = new GoogleMapsService();