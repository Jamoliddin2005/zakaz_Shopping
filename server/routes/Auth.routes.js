const router = require("express").Router();
const { Login, Auth } = require("../controllers/admin");

router.get("/", Auth);
router.post("/login", Login);

module.exports = router;
