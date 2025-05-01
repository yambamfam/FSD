const express = require("express");
const router = express.Router();
const multer = require("multer");
const Member = require("../models/Member");
const path = require("path"); // Import path module

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure 'uploads/' directory exists
  },
  filename: (req, file, cb) => {
    // Create a unique filename: fieldname-timestamp.extension
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Multer upload middleware instance
const upload = multer({
    storage: storage,
    // Optional: Add file filter if needed (e.g., only allow images)
    // fileFilter: (req, file, cb) => { ... }
});

// POST route to create a new member
// Use upload.single('image') middleware to handle the file upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Extract all relevant fields from req.body
    // These names MUST match the 'name' attributes in your frontend FormData
    const {
      name,
      roll,
      year,
      email,
      degree,
      project,
      hobbies,
      certificate,
      internship,
      aboutaim,
    } = req.body;

    // Check if a file was actually uploaded
    const imagePath = req.file ? req.file.path : null; // Use path from multer[10]

    // Create a new Member instance with all the data
    const newMember = new Member({
      name,
      roll,
      year,
      email,
      degree,
      project,
      hobbies,
      certificate,
      internship,
      aboutaim,
      image: imagePath, // Store the file path (e.g., 'uploads/image-1678886400000.jpg')
    });

    // Save the new member to the database
    await newMember.save();

    // Send back the newly created member data
    res.status(201).json(newMember); // Use 201 status for created resource

  } catch (error) {
    console.error("Error creating member:", error);
    // Send an error response
    res.status(500).json({ message: "Failed to add member", error: error.message });
  }
});

// GET route to fetch all members (Seems OK, no changes needed)
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    res.status(500).json({ message: "Failed to fetch members", error: error.message });
  }
});

// GET route to fetch a single member by ID (Seems OK, no changes needed)
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(member);
  } catch (error) {
    console.error("Error fetching member by ID:", error);
    if (error.kind === 'ObjectId') {
         return res.status(400).json({ message: "Invalid member ID format" });
    }
    res.status(500).json({ message: "Failed to fetch member", error: error.message });
  }
});

module.exports = router;