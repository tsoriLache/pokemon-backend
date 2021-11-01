const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors");
const pokemonData = require('./src/pokemon-data');
const pokemonRouter = require('./src/routers/pokemonRouter');
const userRouter = require('./src/routers/userRouter');
const errorHandlerMiddleware = require('./src/middleware/errorHandler');
const userMiddleware = require('./src/middleware/userHandler');
const path = require("path");

app.use(cors());
app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
app.get('/', function(req, res) { // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'))
});
app.use('/',errorHandlerMiddleware);
app.use('/pokemon', userMiddleware ,pokemonRouter);
app.use('/user',userMiddleware, userRouter);


app.listen(process.env.PORT || port,
  () => console.log("Server is running..."));


