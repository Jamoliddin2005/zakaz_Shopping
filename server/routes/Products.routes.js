const router = require("express").Router();
const { PostProducts } = require("../controllers/Products");
const authMiddleware = require("../middleware/auth");
// router.get('/' , )
const fileUpload = require("../middleware/fileUpload");

router.post("/add", authMiddleware, fileUpload.single("photo"), PostProducts);

module.exports = router;
