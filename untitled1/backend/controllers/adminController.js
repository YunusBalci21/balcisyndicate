// backend/controllers/adminController.js
import Apartment from '../models/Apartment.js';

// Function to create a new apartment
export const createApartment = async (req, res) => {
    try {
        const { title, address, description, price, size, rooms } = req.body;
        const images = req.files.map((file) => file.path); // Get image paths

        const newApartment = new Apartment({
            title,
            address,
            description,
            price,
            size,
            rooms,
            images,
        });

        await newApartment.save();
        res.status(201).json({ message: 'Apartment created successfully', apartment: newApartment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create apartment', error });
    }
};

// Function to get all apartments
export const getApartments = async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.status(200).json(apartments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get apartments', error });
    }
};

// Function to update an apartment
export const updateApartment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedApartment = await Apartment.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Apartment updated successfully', apartment: updatedApartment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update apartment', error });
    }
};

// Function to delete an apartment
export const deleteApartment = async (req, res) => {
    try {
        const { id } = req.params; // Get the apartment ID from the URL parameters
        const deletedApartment = await Apartment.findByIdAndDelete(id);

        if (!deletedApartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }

        res.json({ message: 'Apartment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete apartment', error });
    }
};
