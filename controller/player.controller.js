const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const Player = require("../model/Player.model")

//get all player list
router.get('/', (request, response) => {
    Player.getPlayer(response);
})

//get player by id
router.get('/:id', (request, response) => {
    const id = request.params.id
    Player.getPlayerById(id, response)
})

//update player
router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "id_ml": request.body.id_ml,
        "id_server": request.body.id_server,
        "name": request.body.name,
        "country": request.body.country,
        "role": request.body.role
    }
    Player.updatePlayerById(data, response)
})

router.post('/add', (request, response) => {
    const data = {
        "id": request.body.id,
        "id_ml": request.body.id_ml,
        "id_server": request.body.id_server,
        "name": request.body.name,
        "country": request.body.country,
        "role": request.body.role
    }
    Player.addPlayer(data, response)
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Player.removePlayer(id, response)
})

module.exports = router