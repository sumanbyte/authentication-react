import express from 'express';
import { authCheck, login, logout, signup } from '../controllers/auth.js';
import { auth } from '../middleware/auth.js';


const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/auth-check").get(auth,authCheck);
router.route("/logout").get(auth, logout);

export default router;