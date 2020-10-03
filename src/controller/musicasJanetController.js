const musicasJanet = require("../model/musicasJanet.json");

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(musicasJanet);
}

module.exports = { getAll }