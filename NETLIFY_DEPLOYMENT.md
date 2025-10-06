# Netlify Deployment Guide

## Overview
This project now includes Netlify Functions to handle the backend API calls that were previously handled by the Express server. The autocomplete and route calculation functionality will work on Netlify using serverless functions.

## Files Added for Netlify Support

### 1. Serverless Functions
- `netlify/functions/maps-places-autocomplete.ts` - Handles Google Maps Places Autocomplete API
- `netlify/functions/maps-calculate-route.ts` - Handles route calculation with distance matrix

### 2. Configuration
- `netlify.toml` - Main Netlify configuration file
- Updated `package.json` - Added @netlify/functions dependency

## Deployment Steps

### 1. Environment Variables
In your Netlify dashboard, add the following environment variable:
```
GOOGLE_MAPS_API_KEY=AIzaSyBykPptj_49hYJioXaNkXtBV7A-nYT6-PI
```

### 2. Build Configuration
The `netlify.toml` file configures:
- **Publish directory**: `dist/public` (static frontend files)
- **Build command**: `npm run build`
- **Functions directory**: `netlify/functions`
- **API redirects**: Maps `/api/maps/*` to serverless functions

### 3. Deploy
1. Connect your repository to Netlify
2. Ensure the environment variable is set
3. Deploy - Netlify will automatically:
   - Run `npm run build`
   - Deploy static files from `dist/public`
   - Build and deploy serverless functions

## How It Works

### API Endpoints
- `/api/maps/places/autocomplete` → `/.netlify/functions/maps-places-autocomplete`
- `/api/maps/calculate-route` → `/.netlify/functions/maps-calculate-route`

### Frontend Changes Required
**No changes needed!** The frontend continues to make requests to `/api/maps/*` endpoints, and Netlify redirects them to the appropriate serverless functions.

### Features Supported
✅ Address autocomplete with Google Maps suggestions  
✅ Route calculation with accurate pricing  
✅ CORS handling for browser requests  
✅ Error handling and validation  
✅ Same API interface as Express server  

## Testing Functions Locally (Optional)
To test functions locally, install Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```

## Troubleshooting

### Common Issues
1. **Environment variables not working**: Ensure `GOOGLE_MAPS_API_KEY` is set in Netlify dashboard
2. **Functions not found**: Verify `netlify.toml` configuration and function file names
3. **Build errors**: Check that `@netlify/functions` is installed as dev dependency

### Logs
View function logs in Netlify dashboard under Functions tab for debugging.

## Benefits of This Approach
- ✅ Serverless architecture (no server maintenance)
- ✅ Automatic scaling
- ✅ Same functionality as Express server
- ✅ No frontend code changes required
- ✅ Built-in CORS handling
- ✅ Cost-effective for traffic patterns