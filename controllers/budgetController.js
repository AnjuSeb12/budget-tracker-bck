import Budget from "../models/Budget.js";

export const save = async (req, res) => {
  const data = await Budget.create({
    userId: req.user.id,
    categoryId: req.body.categoryId,
    month: req.body.month,
    limit: req.body.limit,
  });

  res.json(data);
};


export const get = async (req, res) => {
  const data = await Budget.find({
    userId: req.user.id,
  });

  res.json(data);
};

