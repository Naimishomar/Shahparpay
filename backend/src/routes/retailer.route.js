import express from "express";
import { register, login, getProfile } from "../controllers/retailer.controller.js";
import { authMiddleware, refreshToken } from "../middlewares/auth.middleware.js";

const retailerRoute = express.Router();

retailerRoute.post("/register", register);
retailerRoute.post("/login", login);
retailerRoute.get("/profile", authMiddleware, getProfile);
retailerRoute.post("/refresh-token", refreshToken);

export default retailerRoute;