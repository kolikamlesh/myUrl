const path = require('path')

function ifError(res, err){

    if(err != undefined){
        res.sendFile(path.resolve(__dirname + '/../public/error.html'))
    }
}

module.exports = ifError