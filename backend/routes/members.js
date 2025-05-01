const express = require("express");
const router = express.Router();
const multer = require("multer");
const Member = require("../models/Member");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const { name, role, email } = req.body;
  const member = new Member({
    name,
    role,
    email,
    image: req.file.filename,
  });
  await member.save();
  res.json(member);
});

router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.get("/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
