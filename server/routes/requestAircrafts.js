import express from 'express';
import {getAircrafts, getAircraft, createAircraft, updateAircraft, deleteAircraft} from '../controllers/aircrafts.js'


const router = express.Router();

router.get('/', getAircrafts);
router.post('/', createAircraft)
router.get('/', getAircraft);;
router.patch('/:id', updateAircraft)
router.delete('/:id', deleteAircraft)

export default router;

//route --> controller