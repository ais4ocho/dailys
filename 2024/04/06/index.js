const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

class NumberStorage {
  constructor() {
    this.numbers = [];
  }

  out = () => {
    return {
      numbers: this.numbers,
      count: this.numbers.length
    }
  }

  sort = () => {
      this.numbers = this.numbers.sort((a, b) => {
      return a - b;
    });
  }
}

let ns = new NumberStorage();

app.get("/data", (req, res) => {
  // return current list of 500 numbers sorted lowest to highest
  // response format is not specified, will respond with { numbers: [], count: x } to list
  // and be able to verify correct count
  response = ns.out();
  res.json(response);
});

app.post("/data",  (req, res) => {
  // accept list of 500 numbers only
  // make sure numbers is in the body

  if (!req.body.numbers) {
    // confirm numbers in body
    res.status(400).json({
      message: "Must submit a list of numbers!",
    });
  } else if (req.body.numbers.length !== 500) {
    // confirm length is 500
    res.status(400).json({
      message: `Number list must be exactly 500 numbers (sent ${req.body.numbers.length})`,
    });
  } else if (!req.body.numbers.every(Number.isInteger)) {
    // confirm numbers does not contain anything but Integers - used ChatGPT to learn about .every
    res.status(400).json({
      message: `Number list must only contain numbers.`,
    });
  } else {
    ns.numbers = req.body.numbers;
    ns.sort()

    res.json({ message: "Number list updated" });
  }
});

app.patch("/data", (req, res) => {
  if (!req.body.number) {
    res.status(400).json({
      message: `Must submit PATCH request with a number!`,
    });
  } else if (!Number.isInteger(req.body.number)) {
    res.status(400).json({
      message: `Endpoint only accepts a single integer as input.`,
    });
  } else {
    res.status(200).json({ message: "Ok!" });
  }

  ns.numbers.push(req.body.number);
  ns.sort();
  
});

app.listen(port, () => {
  console.log(`App started on port -> http://127.0.0.1/${port}...`);
});
