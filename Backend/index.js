const express = require('express');

const server = express();

server.use(express.json) //Say to Express we'll use Json in Body

const users = ['Diego', 'Robson', 'Vítor'];

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
})

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); //Go to "index" index and delete 1 next user

  return res.json(users);
})

server.listen(3000);