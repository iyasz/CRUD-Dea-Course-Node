const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const Hero = require("../model/Hero.model")

//get all hero list
router.get('/', (request, response) => {
    Hero.getHero(response);
})

//get hero by id
router.get('/:id', (request, response) => {
    const id = request.params.id
    Hero.getHeroById(id, response)
})

//uodate hero
router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "name": request.body.name,
        "role": request.body.role
    }
    Hero.updateHeroById(data, response)
})

router.post('/add', (request, response) => {
    const data = {
        "name": request.body.name,
        "role": request.body.role
    }
    Hero.addHero(data, response)
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Hero.removeHero(id, response)
})

module.exports = router