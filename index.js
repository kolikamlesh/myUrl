const connection = require('./database/connectdb')
const express = require('express')
const mysql = require('mysql')
const app = express()
const root = __dirname
const log = console.log

// static files
app.use(express.static('./public'))

// get request
app.get('/', (req, res) => {
    res.sendFile(root + '/index.html')
})

app.get('/createShort', (req, res)=> {
    
    connection.query(`insert into url(id, url)
})

// listening on port
const port = process.env.port || 9000
app.listen(port, (req, res) => {
    log(`listening on ${port}`)
})