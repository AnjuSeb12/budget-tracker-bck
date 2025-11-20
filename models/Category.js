import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  userId: String,
  name: String,
});

export default mongoose.model("Category", categorySchema);
