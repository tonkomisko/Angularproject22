import express from 'express';
const port = 3000;
const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/janko', (req, res) => {
  res.send('Hello janko!');
});
app.get('/json', (req, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  const json = JSON.stringify({
    another: 'item',
  });
  response.end(json);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
