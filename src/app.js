require('./config/dotenv');
const express = require('express');
const {initDatabase} = require('./config/db')
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portifolioRoute = require('./routes/portifolioRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
  res.send('Seja bem vindo a APIdo meu site pessoal.');
})

app.use(cors());
app.use(express.json());

// read all

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portifolio', portifolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`HOST ${process.env.DB_HOST}`);	
})