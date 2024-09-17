import express from 'express';
import { cadastrarServo, listarServos, listarServosPorId, deletarServoPorId } from 'controllers/ServoController';

const router = express.Router();

router.post('/cadastrarNovoServo', cadastrarServo);
router.get('/', listarServos);
router.get('/:id', listarServosPorId);
router.delete('/:id', deletarServoPorId);

export default router;
