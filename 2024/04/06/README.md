# Daily Build - April 6, 2024

## Description

Continuing work from 2024-04-04 -> Trying a Back End Challenge found in the [Headstorm Interview Repo](https://github.com/Headstorm/Interview/tree/master/challenges#back-end-challenge). Doing some practice with Express to create the routes and then manipulating the JSON.

Refactoring after adding PATCH.

## Challenge Text

### Back End Challenge

Create a REST API using any language or web framework you prefer, which performs the following functionality:

Provides a POST endpoint at /data where a user submits a JSON formatted list of 500 random numbers. The list has to be exactly 500 numbers, if there are more or less than 500 an error must be returned. Similarly, if something other than a list of numbers is submitted, an error must be returned.
Provides a GET endpoint at /data which provides the same JSON formatted list of 500 numbers that are sorted from lowest to highest.
BONUS:

Provides a PATCH endpoint at /data which allows insertion of a single number into the list which gets placed in the proper order.

### References

- Express docs: https://expressjs.com/en/starter/examples.html
- Looked through this repo for practical examples: https://github.com/gothinkster/node-express-realworld-example-app/

### Lessons Learned

- Created a Class to have repeatable sort function
- Removed the multer - don't understand what it was doing, had just imported from doc
- Tested needing the body-parser - still needed to include it w/ app.use
- Could add some more data validation but I feel happy with the exercise for now
