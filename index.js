import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import budgetRoutes from "./routes/budget.js";
import expenseRoutes from "./routes/expense.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "https://budgettrk.netlify.app",
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/expenses", expenseRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
