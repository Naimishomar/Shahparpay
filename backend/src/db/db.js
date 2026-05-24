import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error in mongoDB connection", error);   
    }
}