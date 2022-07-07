import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv';

import newSchedules from './routes/newSchedules.js';
import requestAircrafts from './routes/requestAircrafts.js';
import flightRoutes from './routes/flightRoutes.js';
const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use('/newSchedules', newSchedules)
app.use('/requestAircrafts', requestAircrafts)
app.use('/routes', flightRoutes) 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

