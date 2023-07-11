const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place
    let place = await db.Place.findOne({ name: 'Din Tai Fung'})

    // Create a fake sample comment.
    let comment= await db.Comment.create ({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommend!'
    })

    // Add that cmomment to the places's comment array
    place.comments.push(comment.id)

    // save the place now that it has a comment
    await place.save()

    // Exit the program
    process.exit()
}

seed()