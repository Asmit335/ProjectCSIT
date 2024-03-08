import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import nodemailer from 'nodemailer'

const router = express.Router();

// Signup route
router.post("/signup", async(req, res) => {
    const { email, password, confirm } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (password !== confirm) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashpass = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashpass,
            confirm: hashpass,
        });

        await newUser.save();

        // Generate JWT token for the newly signed up user
        const token = jwt.sign({ email: newUser.email }, process.env.KEY, { expiresIn: '1h' });
        if (!token) {
            return res.status(500).json({ message: "Error generating token" });
        }

        console.log("Token:", token); // Log the token

        // Send token in the response
        return res.status(201).json({ message: "User created successfully", token });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Login route
router.post("/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.KEY, { expiresIn: '1h' });
        if (!token) {
            return res.status(500).json({ message: "Error generating token" });
        }

        console.log("Token:", token); // Log the token

        // Send token in the response
        return res.json({ status: true, message: "Login successful", token });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});




//forgot-Password

router.post("/forgetpass", async(req, res) => {
    const { email } = req.body;

    async function sendMail(email) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'khanalasmit696@gmail.com',
                    pass: 'usucaesbadzqhcpn'
                }
            });

            const mailOptions = {
                from: 'khanalasmit696@gmail.com',
                to: email,
                subject: 'Reset Password',
                text: 'This is the email to reset your password',
                // text: `http://localhost:5173/resetpass/${token}`



            };

            const result = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully.Please Check your Email to reset Password.");
            return result;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    }

    try {
        await sendMail(email);
        res.status(200).send("Reset password email sent successfully.");
    } catch (error) {
        res.status(500).send("Failed to send reset password email.");
    }
});


//resetPassword

router.post("/resetpass", async(req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.KEY);

        // Find the user by email
        const user = await User.findOne({ email: decoded.email });

        // If user not found, return error
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        // Return success response
        return res.json({ status: true, message: "Password reset successfully" });
    } catch (error) {
        // If token verification fails or any other error occurs, return error response
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export { router as UserRouter };