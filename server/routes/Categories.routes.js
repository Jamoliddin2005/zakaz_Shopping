const router = require("express").Router();
const { PostCategories, GetCategories } = require("../controllers/Categories");
const authMiddleware = require("../middleware/auth");

router.get("/", GetCategories);
router.post("/add", authMiddleware, PostCategories);

module.exports = router;
