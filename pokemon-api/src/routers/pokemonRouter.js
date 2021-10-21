const express = require('express');
const router = express.Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
const pokemonData = require('../pokemon-data');

const getDataFromPokedex = async (idOrName)=>{
    apiData= await P.getPokemonByName(`${idOrName}`)
    pokemonData.name = apiData.name;
    pokemonData.height = apiData.height, 
    pokemonData.weight = apiData.weight,
    pokemonData.front_pic = apiData.sprites.front_default,
    pokemonData.back_pic = apiData.sprites.back_default,
    pokemonData.types = apiData.types.map((type)=>type.type.name)
    pokemonData.abilities = apiData.abilities.map((ability)=>ability.ability.name)
    return;
}


router.get('/query', async function (request, response) {
    console.log(request.body);
    const name = request.query.name;
    await getDataFromPokedex(name)
    response.json(pokemonData);
})


router.get('/get/:id', async function (request, response) {
    const { id } = request.params;
    await getDataFromPokedex(id)
    response.json(pokemonData);
})






module.exports = router;
