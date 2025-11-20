import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  userId: String,
  categoryId: String,
  month: String,
  limit: Number,
});

export default mongoose.model("Budget", budgetSchema);
