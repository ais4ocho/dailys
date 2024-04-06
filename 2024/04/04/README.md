# Daily Build - April 4, 2024

## Description
Trying a Back End Challenge found in the [Headstorm Interview Repo](https://github.com/Headstorm/Interview/tree/master/challenges#back-end-challenge). Doing some practice with Express to create the routes and then manipulating the JSON.

## Challenge Text

### Back End Challenge
Create a REST API using any language or web framework you prefer, which performs the following functionality:

Provides a POST endpoint at /data where a user submits a JSON formatted list of 500 random numbers. The list has to be exactly 500 numbers, if there are more or less than 500 an error must be returned. Similarly, if something other than a list of numbers is submitted, an error must be returned.
Provides a GET endpoint at /data which provides the same JSON formatted list of 500 numbers that are sorted from lowest to highest.
BONUS:

Provides a PATCH endpoint at /data which allows insertion of a single number into the list which gets placed in the proper order.

### References
+ Express docs: https://expressjs.com/en/starter/examples.html
+ Looked through this repo for practical examples: https://github.com/gothinkster/node-express-realworld-example-app/

### Lessons Learned
+ Express needed some middleware to parse the body, multer and body-parser - haven't run into that before
+ .every() method on arrays for content checking