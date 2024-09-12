// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // Import admin routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/auth', authRoutes);
app.use('/api/protected/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Jama Bolig API!');
});

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
