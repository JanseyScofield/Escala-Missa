import express from 'express';
import { cadastrarServo, listarServos, listarServosPorId } from 'controllers/ServoController';

const router = express.Router();

router.post('/cadastrarNovoServo', cadastrarServo);
router.get('/', listarServos);
router.get('/:id', listarServosPorId);

export default router;
