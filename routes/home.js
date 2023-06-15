const express = require('express')
const router = express.Router()

// @type    get
// @route   /
// @desc    Home page
router.get('/', (req, res)=> {
    res.status(200).render('index', {responce: 'short url appears here..'});
});

module.exports = router