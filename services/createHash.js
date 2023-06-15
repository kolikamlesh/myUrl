const log = console.log
const md5 = require('md5')
const connection = require('../database/connectdb')
const path = require('path')

// functions

function createHash(res, url){
    let baseHash = md5(url).substring(0,7)
    let count 

    // fetching hash if exist in database
    connection.query(`select * from hashurl where hash = '${baseHash}'`, async (err, result) => {
        
        if(result.length != 0){
            count = result[0].count
            count = count + 1
            let newHash = baseHash + count.toString()

            // updating count in table
            connection.query(`update hashurl set count = ${count} where hash = '${baseHash}'`)
            connection.query(`insert into hashurl values('${newHash}', 0,'${url}')`)

            res.render(path.resolve(__dirname + '/../views/index.ejs'), {responce: 'http://localhost:9000/resolve/' + newHash})
        }

        else{
            connection.query(`insert into hashurl values('${baseHash}', 0,'${url}')`)
            res.render(path.resolve(__dirname + '/../views/index.ejs'), {responce: 'http://localhost:9000/resolve/' + baseHash})
        }
    })
}

module.exports = createHash