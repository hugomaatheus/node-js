const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Whassup dogg');
});

app.use('/user', (req, res, next) => {
  console.log('Logged');
  next();
});

app.get('/user', (req, res) => {
  res.send('User: Hbg');
});

app.get('/user/name', (req, res) => {
  res.send('User: Hugo Matheus');
});

app.listen(3000);
