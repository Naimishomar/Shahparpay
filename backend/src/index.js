import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import retailerRoute from "./routes/retailer.route.js";
dotenv.config({quiet: true});


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/retailer", retailerRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();