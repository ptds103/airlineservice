import express from 'express';
import {getSchedules, getSchedule, createSchedule, updateSchedule, deleteSchedule} from '../controllers/newSchedules.js'


const router = express.Router();


router.get('/', getSchedules);
router.post('/', createSchedule);
router.get('/:id', getSchedule)
router.patch('/:id', updateSchedule)
router.delete('/:id', deleteSchedule)

export default router;

//route --> controller