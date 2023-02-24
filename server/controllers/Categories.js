const Categories = require("../models/Categories");

module.exports.PostCategories = async (req, res) => {
  const { name } = req.body;
  if (name) {
    const categories = new Categories({
      name,
    });
    await categories.save();

    return res.status(200).json({ message: "Category added" });
  } else {
    return res.json({ message: "Name is required" });
  }
};

module.exports.GetCategories = async (req, res) => {
  const products = await Categories.find({});
  return res.status(200).json({ products: products });
};
