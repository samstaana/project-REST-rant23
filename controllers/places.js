const router  = require('express').Router();
const places = require('../models/places')

// INDEX
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

// POST
router.post('places', (req, res) => {
    res.render('/places')
})

// NEW
router.get('/', (req, res) => {
    res.render('places/new')
})



module.exports = router;