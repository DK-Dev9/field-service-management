import { Router, Response } from "express";
import authMiddleware, { AuthRequest } from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const router = Router();

router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin", "provider"),
  (req: AuthRequest, res: Response) => {
    res.json({ message: "Service created by admin OR Provider" });
  }
);

router.post(
  "/book",
  authMiddleware,
  roleMiddleware("user"),
  (req: AuthRequest, res: Response) => {
    res.json({ message: "Service booked by user" });
  }
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
