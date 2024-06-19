import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";

const app = express();
const PORT = 3000;


app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

import("./routes/auth.js").then(authRouter => {
    app.use("/api/auth", authRouter.default);
})

import("./routes/user.js").then(userRouter => {
    app.use("/api/user", userRouter.default)
})



app.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
});