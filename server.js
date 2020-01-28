const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

app.get('/', function (req, res) {
  res.send("I'm ready");
});

app.get('/game', function (req, res) {
  res.send("pong");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});