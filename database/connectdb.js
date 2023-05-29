const mysql = require('mysql')
const log = console.log
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myUrl'
})

connection.connect((err) => {

    if(err != undefined){
        log('anable to connect database')
    }

    else{
        log('connected to database')
    }
})
module.exports = connection
