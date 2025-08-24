import express from "express";
import { adminSignup } from "../../../controllers/authentications/admins/admin.controller.js";
const router = express.Router();

router.post("/signup", adminSignup);
export default router;
