// backend/models/Apartment.js
import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        address: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        size: { type: String, required: true },
        rooms: { type: Number, required: true },
        images: [{ type: String }], // Array to store image paths
    },
    { timestamps: true }
);

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;
