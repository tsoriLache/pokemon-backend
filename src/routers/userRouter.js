const router = require("./pokemonRouter")
const fs = require('fs');
const path = require('path');
const { response } = require("express");


router.post('/info', async function (request, response) {
    const username = response.username; 
    response.json({'username':username})
})

router.post('/signin', async function (request, response) {
    const username = response.username; 
    const userPath = path.resolve(`users/${username}`)
    if(!fs.existsSync(userPath)) {
        console.log(userPath);
         fs.mkdirSync(userPath)
        response.send(`Welcome ${username} You are in!`)
    }else{
        response.send(`Welcome Back ${username} You are in!`)
    }

})



module.exports = router;
