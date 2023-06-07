const connection = require('../database/connectdb')
const ifError = require('../services/ifError')
const path = require('path')

function resolve(req, res){

    // fetching original url by using id
    connection.query(`select * from hashurl where hash = '${req.params.id}'`, (err, result) => {

        ifError(res, err)

        if(result.length == 0){
            res.sendFile(path.join(__dirname + '/../public/error.html'))
        }

        else{
            res.redirect(result[0].url)
        }
    })
}

module.exports = resolve
