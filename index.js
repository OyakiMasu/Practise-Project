const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the meme app!');
});

app.post('/create-meme', (req, res) => {
  // code to create a new meme using the data from the request body
});

app.listen(3000, () => {
  console.log('Meme app listening on port 3000!');
});
