import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { googleMapsService } from "./services/googleMapsService";
import { PlaceAutocompleteRequest, RouteRequest } from '@shared/types/maps';

export async function registerRoutes(app: Express): Promise<Server> {
  // Google Maps API routes
  
  // Place Autocomplete endpoint
  app.post('/api/maps/places/autocomplete', async (req, res) => {
    try {
      const request: PlaceAutocompleteRequest = req.body;
      
      if (!request.input) {
        return res.status(400).json({ error: 'Input is required' });
      }
      
      const response = await googleMapsService.getPlaceAutocomplete(request);
      res.json(response);
    } catch (error) {
      console.error('Place Autocomplete API error:', error);
      res.status(500).json({ error: 'Failed to get place suggestions' });
    }
  });
  
  // Route calculation endpoint
  app.post('/api/maps/calculate-route', async (req, res) => {
    try {
      const request: RouteRequest = req.body;
      
      if (!request.pickupAddress || !request.dropoffAddress) {
        return res.status(400).json({ error: 'Pickup and dropoff addresses are required' });
      }
      
      const calculation = await googleMapsService.calculateRouteRates(request);
      res.json(calculation);
    } catch (error) {
      console.error('Route calculation API error:', error);
      res.status(500).json({ error: 'Failed to calculate route rates' });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
