import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: String,
  categoryId: String,
  amount: Number,
  date: Date,
});

export default mongoose.model("Expense", expenseSchema);
