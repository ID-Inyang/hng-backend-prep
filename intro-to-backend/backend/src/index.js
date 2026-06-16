import dotenv from 'dotenv'
import connectDB from './config/database.js';
import app from './app.js';

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB()

        app.on("error", (error) => {
            console.log("Error", error)
            throw error
        })

        const PORT = process.env.PORT||6000

        app.listen(PORT, () => {
            console.log(`Server is running on port : ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Database connection failed!, err")
    }
}

startServer()