import express from "express";
import { addToCart, removeFromCart, getCartDetails} from "../controllers/cartControllers";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/addToCart", verifyToken, addToCart);
router.post("/removeFromCart", verifyToken, removeFromCart);
router.get("/getCartDetails/:user", verifyToken, getCartDetails);

export default router;
