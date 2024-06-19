import express from "express";
import { getUser } from "../controllers/user.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();


router.route("/getuser").get(auth, getUser);

export default router;