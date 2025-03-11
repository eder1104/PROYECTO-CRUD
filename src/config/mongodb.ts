import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const mongoDbURL = process.env.MONG_URL_STRING as string

export default (async() =>{
    try {
        await mongoose.connect(mongoDbURL)
        console.log("mongodb connected!!");
        
    } catch (error) {
        console.log('error :', error);
        process.exit(1);
    }
})()