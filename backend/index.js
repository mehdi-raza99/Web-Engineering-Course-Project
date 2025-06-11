const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./mongoose/mongooseConnect");
const Contact = require("./models/Contact");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests
dbConnect();

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("Contact Form Submission:", { name, email, message });
    res.status(200).json({ message: "Form submitted" });
  } catch (error) {
    console.log("Error Encountered while storing a message: ", error.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
