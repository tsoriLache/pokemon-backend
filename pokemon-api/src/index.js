const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors");
const pokemonData = require('./pokemon-data');
const pokemonRouter = require('./routers/pokemonRouter');
const userRouter = require('./routers/userRouter');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const userMiddleware = require('./middleware/userHandler');
const path = require("path");

app.use(cors());
app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
app.get('/', function(req, res) { // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'))
});
app.use('/',errorHandlerMiddleware);
app.use('/pokemon', userMiddleware ,pokemonRouter);
app.use('/user',userMiddleware, userRouter);





app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));


