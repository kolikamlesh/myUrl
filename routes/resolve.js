const ifError = require('../services/ifError')
const connection = require('../database/connectdb')
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/:id', (req, res) => {
    connection.query(`select * from hashurl where hash = '${req.params.id}'`, (err, result) => {

        ifError(res, err)

        if(result.length == 0){
            res.sendFile(path.join(__dirname + '/../public/error.html'))
        }

        else{
            res.redirect(result[0].url)
        }
    })
})

module.exports = router
