const router  = require('express').Router;

router.get('/', (req, res) => {
    res.send('GET /places')
})

modeule.exports = router;
controllers/places.js