const log = console.log
const connection = require('../database/connectdb')

// functions

function createHash(res, root, url){
    let baseHash = Buffer.from(url).toString('base64').substring(8,14)
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

            res.render(root + '/views/index.ejs', {responce: 'http://localhost:9000/resolve/' + newHash})
        }

        else{
            connection.query(`insert into hashurl values('${baseHash}', 0,'${url}')`)
            res.render(root + '/views/index.ejs', {responce: 'http://localhost:9000/resolve/' + baseHash})
        }
    })
}

module.exports = createHash