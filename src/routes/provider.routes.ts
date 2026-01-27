import { Router, Response } from "express";
import authMiddleware, { AuthRequest } from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";
import { createProviderService, getProviderServices } from "../controllers/providerService.Controller";

const router = Router();

router.post(
  "/service/create",
  authMiddleware,
  roleMiddleware("provider"),
  createProviderService
);

router.get(
  "/service/list",
  authMiddleware,
  roleMiddleware("admin", "provider", "user"),
  getProviderServices
);

router.post(
  "/accept",
  authMiddleware,
  roleMiddleware("provider"),
  (req: AuthRequest, res: Response) => {
    res.json({ message: "Service accepted by provider" });
  }
);

export default router;
