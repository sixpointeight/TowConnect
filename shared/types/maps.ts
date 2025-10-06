export interface DistanceMatrixRequest {
  origins: string[];
  destinations: string[];
}

export interface DistanceMatrixElement {
  status: string;
  duration: {
    text: string;
    value: number;
  };
  distance: {
    text: string;
    value: number;
  };
}

export interface DistanceMatrixResponse {
  status: string;
  rows: {
    elements: DistanceMatrixElement[];
  }[];
}

export interface PlaceAutocompleteRequest {
  input: string;
  location?: {
    lat: number;
    lng: number;
  };
  radius?: number;
}

export interface PlaceAutocompleteResponse {
  predictions: {
    description: string;
    place_id: string;
    structured_formatting: {
      main_text: string;
      secondary_text: string;
    };
  }[];
  status: string;
}

export interface RouteCalculation {
  enrouteMiles: number;
  loadedMiles: number;
  deadheadMiles: number;
  enrouteRate: number;
  loadedRate: number;
  deadheadRate: number;
  hookupFee: number;
  totalCost: number;
}

export interface RouteRequest {
  pickupAddress: string;
  dropoffAddress: string;
}

// 501 Towing & Roadside Office Address (hard-coded starting point)
export const OFFICE_ADDRESS = "501 Towing & Roadside Service, Little Rock, AR";

// Rate constants
export const RATES = {
  ENROUTE: 1.75,    // Office to pickup
  LOADED: 4.00,     // Pickup to dropoff
  DEADHEAD: 1.50,   // Dropoff back to office
  HOOKUP: 85.00     // Base hookup fee
} as const;