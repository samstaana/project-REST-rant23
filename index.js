const express = require('express')
const app = express()

get.app('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)