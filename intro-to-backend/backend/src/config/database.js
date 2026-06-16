import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\nDatabase connected successfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1)
    }
}

export default connectDB;