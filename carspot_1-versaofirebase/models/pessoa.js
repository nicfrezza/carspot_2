// Importar o Firebase Admin SDK
const admin = require('firebase-admin');

// Criar um modelo simples para manipulação de usuários
class Pessoa {
    constructor(nome, email, telefone, senha) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha; // Você pode armazenar a senha criptografada
    }

    // Método para salvar a pessoa no Firestore
    async save() {
        const newUserRef = admin.firestore().collection('users').doc();
        await newUserRef.set({
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            senha: this.senha,
        });
    }
}

// Exportar a classe Pessoa
module.exports = Pessoa;
