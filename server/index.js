const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", // Replace with your Gmail
    pass: "", // Replace with your generated App Password
  },
});

// Email API Endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Email to Business Owner
    const mailOptionsOwner = {
      from: "your-email@outlook.com",
      to: "your-email@outlook.com",
      subject: `New Contact Message from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Auto-reply Email to Client
    const mailOptionsClient = {
      from: "your-email@outlook.com",
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hello ${name},\n\nThank you for reaching out. We will get back to you shortly!\n\nBest regards,\nYour Company Name`,
    };

    // Send Email to Owner
    await transporter.sendMail(mailOptionsOwner);
    console.log("✅ Email to owner sent successfully");

    // Send Auto-Reply to Client
    await transporter.sendMail(mailOptionsClient);
    console.log("✅ Auto-reply sent successfully");

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ message: "Error sending emails", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
