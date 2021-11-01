const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors");
const pokemonData = require('./pokemon-data');
const pokemonRouter = require('./routers/pokemonRouter');
const userRouter = require('./routers/userRouter');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const userMiddleware = require('./middleware/userHandler');

app.use(cors());

app.use('/',errorHandlerMiddleware);
app.use('/pokemon', userMiddleware ,pokemonRouter);
app.use('/user',userMiddleware, userRouter);






// start the server
app.listen(port, function() {
  console.log('app started');
});
