import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  res.json({ msg: "User created" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const u = await User.findOne({ email });
  if (!u) return res.status(404).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, u.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: u._id }, process.env.JWT_SECRET);
  res.json({ token });
};
