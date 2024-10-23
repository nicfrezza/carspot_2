const bcrypt = require('bcryptjs');
const Pessoa = require('../models/pessoa');

const registerUser = async (req, res) => {
    const { nome, email, telefone, senha } = req.body;

    try {
        // Criptografar a senha antes de salvar
        const hashedPassword = await bcrypt.hash(senha, 10);

        const pessoa = await Pessoa.create({
            nome,
            email,
            telefone,
            senha: hashedPassword
        });

        res.status(201).json({
            message: 'Usuário registrado com sucesso!',
            data: pessoa
        });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({
            message: 'Erro ao registrar usuário.',
            error: error.message
        });
    }
};

module.exports = {
    registerUser
};
