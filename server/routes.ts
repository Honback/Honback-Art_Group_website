import express, { type Express, Request, Response } from "express";
import type { Server } from "http";
import { createServer } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  
  // Inquiry submission endpoint
  apiRouter.post("/inquiries", async (req: Request, res: Response) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Add current timestamp
      const inquiryWithTimestamp = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };
      
      const newInquiry = await storage.createInquiry(inquiryWithTimestamp);
      res.status(201).json({ message: "Inquiry submitted successfully", inquiry: newInquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating inquiry:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
  
  // Get all inquiries (for admin purposes)
  apiRouter.get("/inquiries", async (req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Mount API routes
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
