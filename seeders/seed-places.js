const db = require('../models')

db.Place.create([{
    name: 'Din Tai Fung',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Chinese, Dim-Sum',
    pic: '/images/dintaifung.jpg',
    founded: 2020
}, {
    name: 'Carbone',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Italian',
    pic: '/images/pasta.jpg',
    founded: 2013
}, {
    name: 'Tinas Filipino Cuisine',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Filipino',
    pic: '/images/filipino_food.jpg',
    founded: 2015
}, {
    name: 'The Boiling Crab',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Seafood, Cajun/Creole',
    pic: '/images/crabs.jpg',
    founded: 2011
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})