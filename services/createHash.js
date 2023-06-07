const log = console.log
const connection = require('../database/connectdb')

function createHash(url){
    let baseHash = Buffer.from(url).toString('base64').substring(8,14)
    let count 

    // fetching hash if exist in database
    connection.query(`select * from hashurl where hash = '${baseHash}'`, async (err, result) => {
        if(result[0] != undefined){
            count = result[0].count
            count = count + 1
            let newHash = baseHash + count.toString()

            // updating count in table
            connection.query(`update hashurl set count = ${count} where hash = '${baseHash}'`)
            connection.query(`insert into hashurl values('${newHash}', 0,'${url}')`)

            // res.render('../views/index.ejs', {responce: 'http://localhost:9000/resolve/' + newHash, url: url})
        }
    })
}

module.exports = createHash