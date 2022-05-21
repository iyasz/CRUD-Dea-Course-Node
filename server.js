const port = 3001
const express = require("express")
const server = express()
const bodyParser = require('body-parser')
const heroController = require("./controller/hero.controller")
const playerController = require("./controller/player.controller")
const res = require("express/lib/response")

server.use(bodyParser.urlencoded({extended: false}))
server.set("view engine", "ejs")
server.set("views", "view")

server.use("/hero", heroController)
server.use("/player", playerController)

server.use("/", (request, response) => {
    response.render('main')
})

server.listen(port, () => {
    console.log("server running on " + port)
})