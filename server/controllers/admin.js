const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require("../TokenCreater");

module.exports.Login = async (req, res) => {
  const { name, password } = req.body;
  if (name && password) {
    const adminBoolean = await Admin.findOne({ name });
    if (adminBoolean) {
      const PasswordCompare = await bcrypt.compare(
        password,
        adminBoolean.password
      );
      if (PasswordCompare) {
        const user = await generateToken({ name, password });
        return res.json({ token: user });
      }
    } else {
      const getAdmins = await Admin.findOne({ isAdmin: true });
      if (!getAdmins) {
        const hash = await bcrypt.hash(password, 10);
        const admin = new Admin({
          name,
          isAdmin: true,
          password: hash,
        });
        await admin.save();
        const user = await generateToken({ name, password });
        return res.json({ token: user });
      } else {
        return res.json({ message: "Error" });
      }
    }
  } else {
    return res.json({ message: "Name is required" });
  }
};
module.exports.Auth = async (req, res) => {
  const verify = await verifyToken(req.headers.authorization);
  if (verify.name !== "JsonWebTokenError") {
    return res.status(200).json({ message: "Success", data: true });
  } else {
    return res.status(200).json({ message: "not admin", data: false });
  }
};
