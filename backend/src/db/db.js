import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({quiet: true});

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error("MONGO_URI is not defined in the environment variables!");
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error in mongoDB connection:", error);   
    }
}