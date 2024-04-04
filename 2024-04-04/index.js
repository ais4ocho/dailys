const express = require('express')

const app = express()
const port = 3000

const testNumbers = [1,3,5,2,6,3,4,1,3]
const numbers = []

// test root route to make sure app is listening
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/data', (req, res) => {
    // return current list of 500 numbers sorted lowest to highest
    // response format is not specified, will respond with { numbers: [], count: x } to list
    // and be able to verify correct count
    response = {
        numbers: testNumbers,
        count: testNumbers.length
    }

    res.send(response)
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