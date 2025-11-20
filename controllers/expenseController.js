import Expense from "../models/Expense.js";

export const add = async (req, res) => {
  const data = await Expense.create({
    userId: req.user,
    categoryId: req.body.categoryId,
    amount: req.body.amount,
    date: req.body.date,
  });

  res.json(data);
};

export const getByMonth = async (req, res) => {
  const data = await Expense.find({ userId: req.user });
  res.json(data);
};
