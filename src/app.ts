import express from "express";
import authRoutes from "./routes/auth.routes";
import serviceRoutes from "./routes/service.routes";
import providerRoutes from "./routes/provider.routes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/provider", providerRoutes);

export default app;
