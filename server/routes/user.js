import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import nodemailer from 'nodemailer'
import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

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

    //verify registered user
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.KEY, { expiresIn: '1h' });
    if (!token) {
        return res.status(500).json({ message: "Error generating token" });
    }

    console.log("Tokennn:", token); // Log the token

    // Include the token in the reset password link
    const resetPasswordLink = `http://localhost:5173/resetpass/${token}`;
    console.log("reset", resetPasswordLink);

    async function sendMail(email) {
        try {
            // Your nodemailer code
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
                html: `
                <p>Hello,</p>
                <p>We received a request to reset your password. If you didn't make this request, you can ignore this email.</p>
                <p>To reset your password, please click the following link:</p>
                <a href="${resetPasswordLink}">${resetPasswordLink}</a>
                <p>This link will expire in 24 hours for security reasons.</p>
                <p>If you have any questions or need further assistance, please contact our support team.</p>
                <p>Thank you,<br/>EasySite</p>
                `
            };

            const result = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully. Please check your email to reset your password.");
            return result;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    }

    try {
        await sendMail(email);
        res.status(200).json({ message: "Reset password email sent successfully. ", resetPasswordLink });
    } catch (error) {
        res.status(500).json({ message: "Failed to send reset password email." });
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



//khalti payment
router.post('/khalti', async(req, res) => {
    try {
        const payload = req.body;
        const khaltiResponse = await axios.post("https://a.khalti.com/api/v2/epayment/initiate/", payload, {
            headers: {
                Authorization: `Key ${process.env.KHALTI_KEY}`
            }
        });

        // Handle the response from Khalti API
        console.log(khaltiResponse);
        res.json({
            success: true,
            text: 'hello payment khalti gatewate',
            data: khaltiResponse.data
        });

    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while communicating with Khalti API' });
    }
});


export { router as UserRouter };