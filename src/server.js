const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
const PORT = 3002;

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    newUserEmail: "test@example.com",
    newUserPass: "password123",
    resetToken: null,
    resetTokenExpiry: null,
  },
  // Add more users as needed
];

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service provider
  auth: {
    user: "your-email@gmail.com", // Replace with your email address
    pass: "your-email-password", // Replace with your email password
  },
});

// Password reset request
app.post("/request-reset-password", (req, res) => {
  const { newUserEmail } = req.body;
  const user = users.find((user) => user.newUserEmail === newUserEmail);

  if (!user) {
    return res.status(404).json({ message: "Email not found" });
  }

  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

  // Send email with the reset link
  const mailOptions = {
    from: "your-email@gmail.com",
    to: newUserEmail,
    subject: "Password Reset",
    text: `You requested a password reset. Click on this link to reset your password: http://localhost:3000/reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending email" });
    }
    res
      .status(200)
      .json({ message: "A reset link has been sent to your email" });
  });
});

// Validate reset token and update password
app.post("/reset-password/:token", (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const user = users.find(
    (user) => user.resetToken === token && user.resetTokenExpiry > Date.now()
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  user.newUserPass = newPassword;
  user.resetToken = null;
  user.resetTokenExpiry = null;

  res.status(200).json({ message: "Password updated successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
