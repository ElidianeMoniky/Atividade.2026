require('dotenv').config();

const express = require('express');
const { conectarBanco } = require('./database');

const app = express();

app.use(express.json());

// Verifica e conecta ao banco antes de atender às rotas
app.use(async (req, res, next) => {
  try {
    await conectarBanco();
    next();
  } catch (error) {
    console.error('Erro na conexão com o banco:', error.message);

    return res.status(500).json({
      erro: 'Erro ao conectar com o banco de dados'
    });
  }
});

// Rotas de tarefas
app.use('/tarefas', require('./routes/tarefa'));

// Rota inicial
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de tarefas funcionando!' });
});

// Inicialização local
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;