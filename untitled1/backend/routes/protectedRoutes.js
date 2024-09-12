// routes/adminRoutes.js
import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'; // Import the auth middleware

const router = express.Router();

// Protected route
router.get('/admin', authMiddleware, (req, res) => {
    const username = req.user.username; // Correctly get the username from the decoded token
    console.log('Username:', username); // Debugging log to verify the username
    res.send(`Velkommen til Admin Panel!, ${username}!`);
});

export default router;
