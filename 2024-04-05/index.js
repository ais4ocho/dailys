const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = 3000;

const upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const testNumbers = [1, 3, 5, 2, 6, 3, 4, 1, 3];
let numbers = [];

// test root route to make sure app is listening
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  // return current list of 500 numbers sorted lowest to highest
  // response format is not specified, will respond with { numbers: [], count: x } to list
  // and be able to verify correct count
  response = {
    numbers: numbers,
    count: numbers.length,
  };

  res.json(response);
});

app.post("/data", upload.array(), (req, res) => {
  // accept list of 500 numbers only
  // make sure numbers is in the body

  if (!req.body.numbers) {
    // confirm numbers in body
    res.status(400).send({
      message: "Must submit a list of numbers!",
    });
  } else if (req.body.numbers.length !== 500) {
    // confirm length is 500
    res.status(400).send({
      message: `Number list must be exactly 500 numbers (sent ${req.body.numbers.length})`,
    });
  } else if (!req.body.numbers.every(Number.isInteger)) {
    // confirm numbers does not contain anything but Integers - used ChatGPT to learn about .every
    res.status(400).send({
      message: `Number list must only contain numbers.`,
    });
  } else {
    numbers = req.body.numbers.sort((a, b) => {
      return a - b;
    });
    res.json({ message: "Number list updated" });
  }
});

app.patch("/data", (req, res) => {
  if (!req.body.number) {
    res.status(400).send({
      message: `Must submit PATCH request with a number!`,
    });
  } else if (!Number.isInteger(req.body.number)) {
    res.status(400).send({
      message: `Endpoint only accepts a single integer as input.`,
    });
  } else {
    res.status(200).json({ message: "Ok!" });
  }

  numbers.push(req.body.number);
  // can make a class to easily access numbers + sort function + count
  numbers = numbers.sort((a, b) => {
    return a - b;
  });
});

app.listen(port, () => {
  console.log(`App started on port -> http://127.0.0.1/${port}...`);
});
