const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const memberRoutes = require("./routes/members");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/members", memberRoutes);

mongoose.connect("mongodb://localhost:27017/teamdb").then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server started on port 5000"));
});
