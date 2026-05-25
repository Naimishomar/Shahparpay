import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { customAlphabet } from "nanoid";
import Retailers from "../models/retailer.model.js";

export const register = async(req,res)=>{
    try {
        const {name, email, phone, password, address, city, state, zip} = req.body;
        if(!name || !email || !phone || !password || !address || !city || !state || !zip){
            return res.status(400).json({message: "Missing required fields", success: false});
        }
        const existingRetailer = await Retailers.findOne({$or: [{email: email}, {phone: phone}]});
        if(existingRetailer){
            return res.status(400).json({message: "Retailer already exists", success: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const retailerId = `SP-${customAlphabet("1234567890", 7)()}`;
        const newRetailer = await Retailers.create({
            retailerId,
            name,
            email,
            phone,
            password: hashedPassword,
            address,
            city,
            state,
            zip
        });
        const token = jwt.sign({id: newRetailer._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.status(201).json({message: "Retailer registered successfully", success: true, newRetailer, token});
    } catch (error) {
        console.log("Retailer registration error", error);
        return res.status(500).json({message: "Retailer registration error", success: false});
    }
}

export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Missing required fields", success: false});
        }
        const retailer = await Retailers.findOne({ $or: [{ email: email }, { retailerId: email }] });
        if(!retailer){
            return res.status(400).json({message: "Account not found, please register", success: false});
        }
        const isPasswordMatch = await bcrypt.compare(password, retailer.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid password", success: false});
        }
        const token = jwt.sign({id: retailer._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.status(200).json({message: "Retailer login successful", success: true, token});
    } catch (error) {
        console.log("Retailer login error", error);
        return res.status(500).json({message: "Retailer login error", success: false});
    }
}

export const getProfile = async(req,res)=>{
    try {
        const retailer = await Retailers.findById(req.user.id);
        if(!retailer){
            return res.status(400).json({message: "Retailer profile not found", success: false});
        }
        res.status(200).json({message: "Retailer profile fetched successfully", success: true, retailer});
    } catch (error) {
        console.log("Retailer profile fetch error", error);
        return res.status(500).json({message: "Retailer profile fetch error", success: false});
    }
}