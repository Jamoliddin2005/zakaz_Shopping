const { Schema, model } = require("mongoose");

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      photo: {
        type: String,
      },
      name: {
        type: String,
      },
      many: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
});

module.exports = model("Categories", Category);
