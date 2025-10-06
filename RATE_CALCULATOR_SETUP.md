# Google Maps Rate Calculator Setup

## Overview
The Rate Calculator has been completely redesigned to integrate with Google Cloud Maps APIs for accurate, real-time distance calculations. The new system uses a three-leg pricing model:

1. **Enroute** (Office → Pickup): $1.75/mile
2. **Loaded** (Pickup → Drop-off): $4.00/mile  
3. **Deadhead** (Drop-off → Office): $1.50/mile
4. **Hookup Fee**: $85.00

## Required Google Cloud APIs

You need to enable these APIs in your Google Cloud Console:

1. **Distance Matrix API** - For calculating distances between locations
2. **Places API** - For address autocomplete functionality
3. **Geocoding API** - For address validation

## Setup Instructions

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/)
2. Create a new project or select an existing one
3. Enable the required APIs listed above
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Google Maps API key:
   ```
   GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

### 3. Office Address Configuration

The office address is hard-coded in `shared/types/maps.ts`:
```typescript
export const OFFICE_ADDRESS = "501 Towing & Roadside Service, Little Rock, AR";
```

To change the office address, update this constant.

### 4. Rate Configuration

Rates are configured in `shared/types/maps.ts`:
```typescript
export const RATES = {
  ENROUTE: 1.75,    // Office to pickup
  LOADED: 4.00,     // Pickup to dropoff  
  DEADHEAD: 1.50,   // Dropoff back to office
  HOOKUP: 85.00     // Base hookup fee
} as const;
```

## How It Works

### Frontend Components

1. **AddressAutocomplete** (`client/src/components/ui/address-autocomplete.tsx`)
   - Provides Google Places autocomplete for address inputs
   - Debounced API calls for better performance
   - Focused on Little Rock, AR area

2. **RateCalculator** (`client/src/components/RateCalculator.tsx`)
   - Main calculator interface
   - Displays three-leg route visualization
   - Shows detailed cost breakdown

### Backend Services

1. **GoogleMapsService** (`server/services/googleMapsService.ts`)
   - Handles all Google Maps API calls securely
   - Calculates distance matrix for three route legs
   - Converts meters to miles and applies rates

2. **API Routes** (`server/routes.ts`)
   - `/api/maps/places/autocomplete` - Address suggestions
   - `/api/maps/calculate-route` - Route and rate calculation

### Calculation Process

1. User enters pickup and drop-off addresses
2. Frontend validates inputs and calls backend API
3. Backend calls Google Distance Matrix API with three origin/destination pairs:
   - Office → Pickup (Enroute)
   - Pickup → Drop-off (Loaded)
   - Drop-off → Office (Deadhead)
4. Distances are converted to miles and rates applied
5. Total cost = Enroute + Loaded + Deadhead + Hookup Fee

## Testing Without API Key

For development without a Google Maps API key:

1. The system will show a warning in server logs
2. API calls will fail gracefully with error messages
3. You can still test the UI components and flow

## Security Considerations

- API key is stored server-side only
- All Google Maps calls go through backend APIs
- Frontend never directly accesses Google Maps APIs
- Consider IP restrictions on your API key for production

## Cost Management

Google Maps API pricing:
- Distance Matrix: ~$5 per 1,000 requests
- Places Autocomplete: ~$2.83 per 1,000 requests
- Set up billing alerts in Google Cloud Console
- Consider request caching for production

## Development Commands

```bash
npm run dev          # Start development server
npm run check        # TypeScript type checking
npm run build        # Build for production
```

## Troubleshooting

### Common Issues

1. **"API key not found" warning**
   - Check `.env` file exists and has `GOOGLE_MAPS_API_KEY`
   - Ensure server is restarted after adding environment variable

2. **"Failed to calculate distance" errors**
   - Verify API key is correct
   - Check that required APIs are enabled in Google Cloud Console
   - Ensure API key has proper permissions

3. **No autocomplete suggestions**
   - Check Places API is enabled
   - Verify network connectivity
   - Check browser developer tools for API errors

4. **Addresses not found**
   - Try more specific addresses (include street numbers)
   - Ensure addresses are within reasonable distance of Little Rock, AR
   - Check address spelling and format