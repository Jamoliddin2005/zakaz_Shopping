const Categories = require("../models/Categories");
module.exports.PostProducts = async (req, res) => {
  const { photo, name, many, price, category } = req.body;
  const categoryBoolean = await Categories.findById(category);
  if (categoryBoolean) {
    await Categories.findOneAndUpdate(category, {
      $push: {
        products: { photo, name, many, price },
      },
    });
    return res.status(200).json({ message: "Product added" });
  } else {
    return res.json({ message: "Category not found" });
  }
};
