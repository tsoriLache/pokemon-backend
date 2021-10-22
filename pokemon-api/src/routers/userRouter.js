const router = require("./pokemonRouter")
const fsp = require('fs/promises');
const path = require('path');


router.post('/info', async function (req, res) {
    username = req.body.username; 
    await fsp.mkdir(path.resolve(`users/${username}`))
    res.send(`Welcome ${username} You are in!`)
})

module.exports = router;
