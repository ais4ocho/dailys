const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/data', (req, res) => {
    // return current list of 500 numbers sorted lowest to highest
}) 

app.post('/data', (req, res) => {
    // accept list of 500 numbers only
}) 

app.patch('/data', (req,res) => {
    // inserts int into array of numbers and resorts it, challenge does not specify response
})

app.listen(port, () => {
    console.log(`App started on port -> http://127.0.0.1/${port}...`)
})