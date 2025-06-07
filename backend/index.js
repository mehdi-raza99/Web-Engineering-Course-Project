const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Later: Save to MongoDB
  console.log("Contact Form Submission:", { name, email, message });

  res.status(200).json({ message: "Form submitted successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
