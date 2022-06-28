import express from 'express';
import mongoose from 'mongoose';
import RequestFlightRoute from '../models/requestFlightRoutes.js';

const router = express.Router();

export const getFlightRoutes = async (req, res) => { 
    try {
        const flight = await RequestFlightRoute.find();
                
        res.status(200).json(flight);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFlightRoute = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await RequestFlightRoute.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFlightRoute = async (req, res) => {
    const { 
        departureNumber,
        arrivalNumber, 
        departureAirport, 
        arrivalAirport, 
        departureTime, 
        arrivalTime,
        type 
    } = req.body;

    const newrequestFlightRoute = new RequestFlightRoute({ 
        departureNumber,
        arrivalNumber, 
        departureAirport, 
        arrivalAirport, 
        departureTime, 
        arrivalTime,
        type 
    })
    try {
        await newrequestFlightRoute.save();

        res.status(201).json(newrequestFlightRoute );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFlightRoute = async (req, res) => {
    const { id } = req.params;
    const { 
        departureNumber,
        arrivalNumber, 
        departureAirport, 
        arrivalAirport, 
        departureTime, 
        arrivalTime,
        type  
    } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No flight route with id: ${id}`);
    }
    const updatedFlightRoutes = { 
        departureNumber,
        arrivalNumber, 
        departureAirport, 
        arrivalAirport, 
        departureTime, 
        arrivalTime,
        type,  
        _id: id 
    };

    await RequestFlightRoute.findByIdAndUpdate(id, updatedFlightRoutes, { new: true });

    res.json(updatedFlightRoutes);
}

export const deleteFlightRoute = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No flight route with id: ${id}`);
    }
    await RequestFlightRoute.findByIdAndRemove(id);

    res.json({ message: "Flight route deleted successfully." });
}

export default router;
// controller --> api