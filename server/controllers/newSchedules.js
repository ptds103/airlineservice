import express from 'express';
import mongoose from 'mongoose';
import newSchedules from '../models/requestNewSchedule.js';

const router = express.Router();

export const getSchedules = async (req, res) => { 
    try {
        const schedule = await newSchedules.find()                
        res.status(200).json(schedule)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSchedule = async (req, res) => { 
    const { id } = req.params;
    try {
        const schedule = await newSchedules.findById(id);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSchedule = async (req, res) => {
    const { 
        flightInfo,
        routeInfo, 
        scheduleDate, 
        currentWeight, 
        currentPassenger,
    } = req.body;

    const newerSchedules = new newSchedules({ 
        flightInfo,
        routeInfo, 
        scheduleDate, 
        currentWeight, 
        currentPassenger,
    })
    try {
        await newerSchedules.save();

        res.status(201).json(newerSchedules );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSchedule = async (req, res) => {
    const { id } = req.params;
    const { 
        flightInfo,
        routeInfo, 
        scheduleDate, 
        currentWeight, 
        currentPassenger,
    } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No flight route with id: ${id}`);
    }
    const updatedNewSchedule = { 
        flightInfo,
        routeInfo, 
        scheduleDate, 
        currentWeight, 
        currentPassenger,
        _id: id 
    };

    await newSchedules.findByIdAndUpdate(id, updatedNewSchedule, { new: true });

    res.json(updatedNewSchedule);
}

export const deleteSchedule = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No flight route with id: ${id}`);
    }
    await newSchedules.findByIdAndRemove(id);

    res.json({ message: "Flight route deleted successfully." });
}

export default router;
