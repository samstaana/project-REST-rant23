// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// What does this do?  When we send data with the POST verb, that data get encryptef for its trip across the internet.  Because it is protected this way in transit, that makes it extra safe for usernames, passwords, and other sensitive data.  However, it also means w will need as extra tool to decrypt that data for us.

// The first argument to app.use, /places sests all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.

// Controllrs & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/', (req, res) => {
    res.render('places/index')
})

// It is important that this stays at the bottom , other wise it will override your other pages!!!
app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)