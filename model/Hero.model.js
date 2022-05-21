const { response } = require('express')
const db = require('../config')

exports.getHero = (response) => {
    //query data
    const sql = "select * from `hero`"

    //execute data
    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        
        //response data
        const heroes = {
            tittle: "MOBILE LEGENDS HERO LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('index', {heroes})
        response.end()
    })
}

exports.getHeroById =  (id, response) => {
    const sql = `select * from hero where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        const hero = {
            tittle: "UPDATE HERO",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('heroDetail', {hero})
        response.end()
    })
}

exports.updateHeroById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role

    const sql = `update hero set name = '${name}', role = '${role}' where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/hero')
        response.end
    })
}

exports.addHero = (data, response) => {
    const name = data.name
    const role = data.role

    const sql = `insert into hero (name, role) values ('${name}', '${role}')`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/hero')
        response.end
    })
}

exports.removeHero = (id, response) => {
    const sql = `delete from hero where id='${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/hero')
        response.end
    })
}