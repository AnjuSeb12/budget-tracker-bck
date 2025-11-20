import express from "express";
import auth from "../middleware/auth.js";
import { save, get } from "../controllers/budgetController.js";

const router = express.Router();

router.post("/", auth, save);
router.get("/", auth, get);

export default router;
