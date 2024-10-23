require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

// Caminho para o arquivo JSON com as credenciais de serviço
const serviceAccount = require('./config/serviceAccountKey.json');

// Inicializar o Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://carspot-2f0fa.firebaseio.com"
});

// Inicializar Firestore
const db = admin.firestore();

// Criar a instância do Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Rotas para páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Outras rotas
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'inicio.html'));
});
app.get('/entrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login/sign_in.html'));
});
app.get('/registrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login/sign_up.html'));
});
app.get('/recuperar', (req, res) => {
    res.sendFile(path.join(__dirname, 'EsquecerSenha/check_password.html'));
});
app.get('/reset_password', (req, res) => {
    res.sendFile(path.join(__dirname, 'EsquecerSenha/reset_password.html'));
});
app.get('/pesquisar', (req, res) => {
    res.sendFile(path.join(__dirname, 'TelaPrincipal/index.html'));
});

app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'UserPage/user.html'));
});

app.get('/relatorio', (req, res) => {
    res.sendFile(path.join(__dirname, 'Rleatorios/relatorio.html'));
});


app.use(express.static(path.join(__dirname, 'TelaPrincipal')));

// Rota para registrar usuário
app.post('/api/users/register', async (req, res) => {
    console.log('Requisição recebida para registro:', req.body);

    const { nome, email, telefone, senha } = req.body;

    if (!nome || !email || !telefone || !senha) {
        console.log('Campos obrigatórios ausentes');
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password: senha,
            displayName: nome
        });
        
        await db.collection('users').doc(userRecord.uid).set({
            nome,
            telefone,
            email,
        });

        res.status(201).send('Usuário registrado com sucesso');
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(400).send('Erro ao registrar usuário: ' + error.message);
    }
});


// Rota para login de usuário
app.post('/api/users/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
      return res.status(400).send('Email e senha são obrigatórios.');
  }

  try {
      // Autenticação usando o Firebase Authentication
      const userRecord = await admin.auth().getUserByEmail(email);
      
      // Para autenticar a senha, você precisa de um método de verificação (por exemplo, com Firebase Client SDK)
      // Isso normalmente é feito no frontend, não no backend.

      const idToken = await admin.auth().createCustomToken(userRecord.uid);

      res.status(200).json({ token: idToken });
  } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(401).send('Erro ao autenticar usuário: ' + error.message);
  }
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});