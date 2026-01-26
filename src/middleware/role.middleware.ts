import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

const roleMiddleware =
  (...allowedRoles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    console.log("User Role:", req.user);
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: "Access denied" });
      return;
    }
    next();
  };

export default roleMiddleware;
