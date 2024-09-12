import multer from 'multer';
import express from 'express';
import { createApartment } from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Correct path to save files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    }
});

const upload = multer({ storage: storage });

// Endpoint to add a new apartment
router.post('/apartment', authMiddleware, upload.array('images'), createApartment);

// Other routes could be added here if needed in the future
export default router;
