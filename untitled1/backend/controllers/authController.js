// controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new admin user
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            isAdmin: true, // Set the user as an admin
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register user', error });
    }
};

// Login an existing user
// controllers/authController.js
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt for:', email);

    try {
        const user = await User.findOne({ email });
        console.log('User found:', user);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Is password valid:', isPasswordValid);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign(
            { id: user._id, username: user.username, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Failed to login', error });
    }
};


