import express from 'express';
import { cadastrarServo, listarServos } from 'controllers/ServoController';

const router = express.Router();

router.post('/cadastrarNovoServo', cadastrarServo);
router.get('/', listarServos);

export default router;
