import express from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers.authorization || req.header.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "No token provided", success: false});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "User not found", success: false});
        }
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Auth middleware error", error);
        return res.status(500).json({message: "Auth middleware error", success: false});
    }
}

export const refreshToken = async(req,res)=>{
    try {
        const token = req.headers.authorization || req.header.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "No token provided", success: false});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "User not found", success: false});
        }
        const newToken = jwt.sign({id: decoded.id}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.status(200).json({message: "Token refreshed successfully", success: true, accessToken: newToken});
    } catch (error) {
        console.log("Token refresh error", error);
        return res.status(500).json({message: "Token refresh error", success: false});
    }
}