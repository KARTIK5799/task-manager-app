import mongoose from "mongoose";
import dotenv from "dotenv"


const url= "mongodb+srv://test:test@cluster0.v1e0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
dotenv.config();

const connectDb =async()=>{
    try {
       await mongoose.connect(url) ;
 
       console.log("✅ MongoDB Connected...");
    } catch (error) {
        console.log("Mongo Connection Error",error);
        process.exit(1);
    }
}

export default connectDb;