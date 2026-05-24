import mongoose from "mongoose";

const RetailerSchema = new mongoose.Schema({
    retailerId:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        trim: true,
        lowercase: true
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[6-9]\d{9}$/
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zip:{
        type: String,
        required: true,
        match: /^[0-9]{6}$/,
        trim: true
    }
}, {timestamps: true});

const Retailers = mongoose.model("Retailer", RetailerSchema);
export default Retailers;