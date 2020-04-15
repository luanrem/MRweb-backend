const express = require('express');

const server = express();

server.use(express.json) //Say to Express we'll use Json in Body



const users = ['Diego', 'Robson', 'Vítor'];

//Middware Global
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next(); //Continua executando o próximo método

  console.timeEnd('Request');
})

//Middware Local
function checkUserExist(req, res, next) {
  if (!req.body.user) {
    return res.status(400).json({ error: "User Name is required"})
  }

  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({ error: 'User does not exist'})
  }

  return next();
}


// Rotas
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.post('/users', checkUserExist, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
})

server.put('/users/:index', checkUserInArray, checkUserExist, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); //Go to "index" index and delete 1 next user

  return res.json(users);
})

server.listen(3000);