
import express from "express";
import auth from "../middleware/auth.js";
import { add, all, update, remove } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", auth, add);
router.get("/", auth, all);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

export default router;
