import express from 'express';
import { cadastrarServo, listarServos, listarServosPorId,  editarServoPorId, deletarServoPorId } from 'controllers/ServoController';

const router = express.Router();

router.post('/cadastrar', cadastrarServo);
router.get('/', listarServos);
router.get('/:id', listarServosPorId);
router.put('/editar/:id',editarServoPorId);
router.delete('/:id', deletarServoPorId);

export default router;
