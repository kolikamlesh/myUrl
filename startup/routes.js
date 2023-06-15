const createShort = require('../routes/createShort')
const home = require('../routes/home')
const resolve = require('../routes/resolve')

module.exports = function(app, express){
    app.use(express.urlencoded({extended: true}))
    app.set('view engine', 'ejs')

    app.use('/', home)
    app.use('/resolve', resolve)
    app.use('/createShort', createShort)
}