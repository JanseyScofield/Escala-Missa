import express from 'express';

const controller = require('controllers/ServoController');
const router = express.Router();

router.post('/cadastrarNovoServo',controller.cadastrarServo);
router.get('/',controller.listarServos);

module.exports = router;