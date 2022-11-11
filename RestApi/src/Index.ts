// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Definindo o app Express
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];
// Adicionar Helmet para melhorar a segurança da API Rest
app.use(helmet());
// Usar bodyParser para transcrever objetos JSON em JS
app.use(bodyParser.json());
// Habilitar CORS para todas as requisições
app.use(cors());
// Adicionar Morgar para log de requisições HTTP
app.use(morgan('combined'));
// Definindo um ponto final para retornar todos os ads
app.get('/', (req, res) => {
  res.send(ads);
});
// Iniciar o servidor
app.listen(3001, () => {
  console.log('listening on port 3001');
});