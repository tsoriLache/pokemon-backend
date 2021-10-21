const express = require('express');
const app = express();
const port = 8080;

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const getPokeByName = async(nameOrId)=>{
    await P.getPokemonByName(`${nameOrId}`); 
}




// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
app.get('/', function(req, res) {
  res.json('23');
});