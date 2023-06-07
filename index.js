const connection = require('./database/connectdb')
const isValidUrl = require('./services/isValidUrl')
const createShort = require('./routes/createShort')
const resolve = require('./routes/resolve')
const express = require('express')
const path = require('path')
const app = express()
const root = __dirname
const log = console.log


// middlewares
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// get request
app.get('/', (req, res) => {
    res.render(path.resolve(root + '/views/index.ejs'), {responce: 'short url appears here..'})
})

app.get('/resolve/:id', resolve)

// post request
app.post('/createShort', createShort)

// listening on port
const port = process.env.port || 9000

app.listen(port, (req, res) => {
    log(`listening on ${port}`)
})