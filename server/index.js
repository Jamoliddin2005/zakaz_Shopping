const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./helper/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;
app.use("/product", require("./routes/Products.routes.js"));
app.use("/category", require("./routes/Categories.routes.js"));
app.use("/auth", require("./routes/Auth.routes.js"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
