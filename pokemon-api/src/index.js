const express = require('express');
const app = express();
const port = 8080;
const pokemonData = require('./pokemon-data');
const pokemonRouter = require('./routers/pokemonRouter');
const userRouter = require('./routers/userRouter');
const errorHandlerMiddleware = require('./middleware/errorHandler');

app.use('/',errorHandlerMiddleware);
app.use('/pokemon', pokemonRouter);
app.use('/', userRouter);






// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
// app.get('/', function(req, res) {
//   res.json('23');
// });