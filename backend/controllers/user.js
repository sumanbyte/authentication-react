import User from "../models/User.js";

export const getUser = async (req, res) => {
    const { email } = req.user;

    const user = await User.findOne({ email });

    if (user) {
        return res.status(200).json({ message: "Found user", user });
    } else {
        return res.status(400).json({ message: "User not found" })
    }
}