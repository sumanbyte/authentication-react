import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    if (!req.cookies.token) {
        return res.status(401).json({ message: "Missing auth token" });
    }

    const data = jwt.verify(req.cookies.token, "suman");
    if (!data) {
        return res.status(400).json({ message: "Invalid token" })
    } else {
        req.user = data;
        next();
    }
}