const { response } = require('express')
const db = require('../config')

exports.getPlayer = (response) => {
    //query data
    const sql = "select * from `player`"

    //execute data
    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        
        //response data
        const players = {
            tittle: "MOBILE LEGENDS PLAYERS LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('player', {players})
        response.end()
    })
}

exports.getPlayerById =  (id, response) => {
    const sql = `select * from player where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        const player = {
            tittle: "UPDATE PLAYER",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('playerDetail', {player})
        response.end()
    })
}

exports.updatePlayerById = (data, response) => {
    const id = data.id
    const id_ml = data.id_ml
    const id_server = data.id_server
    const name = data.name
    const country = data.country
    const role = data.role

    const sql = `update player set id_ml = '${id_ml}', id_server = '${id_server}', name = '${name}', country = '${country}', role = '${role}' where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/player')
        response.end
    })
}

exports.addPlayer = (data, response) => {
    const id_ml = data.id_ml
    const id_server = data.id_server
    const name = data.name
    const country = data.country
    const role = data.role

    const sql = `insert into player (id_ml, id_server, name, country, role) values ('${id_ml}', '${id_server}', '${name}', '${country}', '${role}')`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/player')
        response.end
    })
}

exports.removePlayer = (id, response) => {
    const sql = `delete from player where id='${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/player')
        response.end
    })
}