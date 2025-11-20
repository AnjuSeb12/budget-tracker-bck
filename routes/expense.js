import express from "express";
import auth from "../middleware/auth.js";
import { add, getByMonth } from "../controllers/expenseController.js";

const router = express.Router();

router.post("/", auth, add);
router.get("/", auth, getByMonth);

export default router;
