const connection = require('./database/connectdb')
const isValidUrl = require('./services/isValidUrl')
const createHash = require('./services/createhash')
const express = require('express')
const app = express()
const root = __dirname
const log = console.log

// middlewares
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// get request
app.get('/', (req, res) => {
    res.render(root + '/views/index.ejs', {responce: 'short url appears here..'})
})

// post request
app.post('/createShort', (req, res)=> {
    
    isValidUrl(req.body.url, (valid) => {

        if(valid == false){
            res.render(root + '/views/index.ejs', {responce: 'invalid url'})
        }

        else{

            connection.query(`select * from hashurl where url = '${req.body.url}'`, async (err, result) => {
        
                if(result[0] == undefined){
                    
                    await createHash(req.body.url)
                    
                    // fetching hashed url from table
                    connection.query(`select * from hashurl where url = ${req.body.url}`, (err, result) => {
                        res.render(root + '/views/index.ejs', {responce: 'http://localhost:9000/resolve/' + result[0].hash})
                    })
                }
                
                else{
                    res.render(root + '/views/index.ejs', {responce: 'http://localhost:9000/resolve/' + result[0].hash})
                }
            })
        }

    })
})

// listening on port
const port = process.env.port || 9000
app.listen(port, (req, res) => {
    log(`listening on ${port}`)
})