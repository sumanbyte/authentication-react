import User from "../models/User.js";
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const user = await User.findOne({ email });    

    if (user) {
        if (user.password === password) {
            const tokenData = {
                name: user.name,
                email: user.email
            };
        
            const token = jwt.sign(tokenData, "suman", {expiresIn: "30D"});
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 30 * 24 * 60 * 60 * 1000

            })
            return res.status(200).json({ message: "You are logged in", token });
        }else {
            return res.status(400).json({ message: "Incorrect password" });
        }
    }
    else {
        return res.status(400).json({ message: "User not found." });
    }
}


export const signup = async (req, res) => {
    const { name, email, password } = req.body;


    if (!name || !email || !password) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const exists = await User.findOne({email});

    if(exists){
        return res.status(400).json({message: "User already exists."})
    }

    const user = await User.create({ name, email, password });

    if (user) {
        return res.status(201).json({ message: "User created successfully" });
    } else {
        return res.status(400).json({ message: "Some error occured" });
    }
}

export const authCheck = async (req, res) => {
    res.status(200).json({authenticated: true, user: req.user})
}

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: "Logged out"})
}