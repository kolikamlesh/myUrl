const express = require('express')
const app = express()
const log = console.log

require('./startup/routes')(app, express)

// listening on port
const port = process.env.port || 9000

app.listen(port, (req, res) => {
    log(`listening on ${port}`)
})