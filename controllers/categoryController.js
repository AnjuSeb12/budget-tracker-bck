import Category from "../models/Category.js";
import Budget from "../models/Budget.js";
import Expense from "../models/Expense.js";

// Add new category
export const add = async (req, res) => {
  const data = await Category.create({
    userId: req.user.id,
    name: req.body.name,
  });

  res.json(data);
};

// Get all categories
export const all = async (req, res) => {
  const data = await Category.find({
    userId: req.user.id,
  });

  res.json(data);
};

// Update (Edit) category
export const update = async (req, res) => {
  const { id } = req.params;

  const data = await Category.findByIdAndUpdate(
    id,
    { name: req.body.name },
    { new: true }
  );

  res.json(data);
};

// Delete category + its budgets & expenses
export const remove = async (req, res) => {
  const id = req.params.id;

  await Category.findByIdAndDelete(id);
  await Budget.deleteMany({ categoryId: id });
  await Expense.deleteMany({ categoryId: id });

  res.json({ message: "Category deleted successfully" });
};
