import express from 'express';

const controller = require('controllers/ServoController');
const router = express.Router();

router.post('/cadastrarNovoServo',controller.cadastrarServo);

module.exports = router;