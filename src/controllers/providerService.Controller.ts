import { Response } from "express";
import ProviderService from "../models/providerService.model";
import { AuthRequest } from "../middleware/auth.middleware";

export const createProviderService = async (req: AuthRequest, res: Response) => {
    try {
        const { categoryId, title, price, description, durationInHours } = req.body;
        const providerId = req.user?.id;
        if (!providerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (!categoryId || !title || !price || !description || !durationInHours) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const providerService = await ProviderService.create({
            providerId,
            categoryId,
            title,
            price,
            description,
            durationInHours
        });
        res.status(201).json({
            message: "Provider service created successfully",
            providerService
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create provider service",
            error
        });
    }
};

export const getProviderServices = async (req: AuthRequest, res: Response) => {
    try {
        const services = await ProviderService.find({ isActive: true });
        res.status(200).json({
            services
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve provider services",
        });
    }
};