import express from "express";
import { verifyToken } from "../middleware/auth";
import { getUserDetails } from "../controllers/userControllers";

const router = express.Router();

// router.get("/getUserDetails/:email", verifyToken, getUserDetails);
router.get("/getUserDetails/:email", getUserDetails);

export default router;