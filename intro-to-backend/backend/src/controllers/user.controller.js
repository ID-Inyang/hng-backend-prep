import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are important!" })
        }

        // check if user exist already

        const existing = await User.findOne({ email: email.toLowerCase() })
    } catch (error) {

    }
}