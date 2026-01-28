import { Router } from "express";
// import { register, login, logout } from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";
import { register, login, logout, refreshAccessToken } from "../controllers/ar.auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/refresh", refreshAccessToken);

export default router;
