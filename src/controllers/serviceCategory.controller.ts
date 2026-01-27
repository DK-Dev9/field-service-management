import { Request, Response } from "express";
import ServiceCategory from "../models/serviceCategory.model";

export const createServiceCategory = async (req: Request, res: Response) => {
  try {
    const { name, description, basePrice } = req.body;

    if (!name || !description || !basePrice) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const existingService = await ServiceCategory.findOne({ name });
    if (existingService) {
      return res.status(409).json({
        message: "Service with this name already exists"
      });
    }

    const service = await ServiceCategory.create({
      name,
      description,
      basePrice
    });

        res.status(201).json({
      message: "Service created successfully",
      service
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create service",
      error
    });
  }
};

export const getServiceCategories = async (req: Request, res: Response) => {
  try {
    const services = await ServiceCategory.find({ isActive: true });
    res.status(200).json({
      services
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve services",
    });
  }
};

