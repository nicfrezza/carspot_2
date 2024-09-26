const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Rota para registrar um novo usuário
router.post('/registrar', registerUser);

module.exports = router;
