import express from "express";
import authRoutes from "./routes/auth.routes";
import serviceRoutes from "./routes/service.routes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/service", serviceRoutes);

export default app;
