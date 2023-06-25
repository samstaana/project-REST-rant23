require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// The first argument to app.use, /places sests all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// It is important that this stays at the bottom , other wise it will override your other pages!!!
app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)