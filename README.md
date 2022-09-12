# TDD: JavaScript

## Getting Started

1. Clone this repo.
2. In your terminal, run `npm install`.
3. In your terminal, run `npm test`.
4. Edit `script.js` until you are passing all test cases!
5. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
6. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Exercises

### TDD 1: higherOrLower

`higherOrLower(value, value)` takes two numbers as opposing arguments. The function then uses conditional statements to determine if the first value is higher, lower, or equal to the second value.

`higherOrLower(5, 6); // => {"lower"}`  
`higherOrLower(6, 5); // => {"higher"}`  
`higherOrLower(6, 6); // => {"equal"}`

### TDD 2: studentBody

`studentBody(array)` is a function that takes an array as an argument. The array should include a name, age, and grade of each student. The function should return the total number of students in the array, the average age of all students, and the average grade of all students.

```js
studentBody([
  { name: "John", age: 15, grade: 10 },
  { name: "Jane", age: 16, grade: 11 },
  { name: "Jack", age: 17, grade: 12 },
]); // => { total: 3, age: 16, grade: 11 }
```

### TDD 3: carFactory

`carFactory(object)` is a function that takes an object as an argument. This object includes the make, model, year, and number of doors of a vehicle. Return whether the vehicle is a motorcycle (0 doors), coupe (2 doors), or a sedan (4 doors).

```js
carFactory({
  make: "Toyota",
  model: "Camry",
  year: 2015,
  doors: 4,
}); // => "sedan"
```

### TDD 4: fruitBasket

`fruitBasket(array)` is a function that takes an array of strings as an argument, where each string is the name of a fruit. The function outputs an array of objects with the following properties and methods:

- `name`: the name of the fruit
- `weight`: the weight of the fruit (random number)
- `eat()`: returns the string `"You ate a [fruit name]!"`
- `throwAway()`: returns the string `"You threw away a [fruit name]!"`

```js
const fruits = fruitBasket(["pear", "apple", "banana"]); /* => [
  {
    name: 'pear',
    weight: 1,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  },
  {
    name: 'apple',
    weight: 3,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  },
  {
    name: 'banana',
    weight: 2,
    eat: [Function: eat],
    throwAway: [Function: throwAway]
  }
]*/

fruits[0].eat(); // => "You ate a pear!"
```

### TDD 5: dvdCollection

`dvdCollection(array, array, array)` is a function that takes three arrays as arguments. The first array `funnyMovies` should include the names of funny movies. The second array `dramaticMovies` should include the names of dramatic movies. The third array `actionMovies` should include the names of action movies. The function should return an array of all the movies in the three arrays sorted in alphabetical order.

=> `dvdCollection(["The Hangover", "Zoolander"], ["The Godfather", "The Notebook"], ["The Matrix", "The Avengers"]); // => ["The Avengers", "The Godfather", "The Hangover", "The Matrix", "The Notebook", "Zoolander"]`

### OPTIONAL: coinMachine

Our coin machine is broken! We need you to write a function that will take a number as an argument and return the correct change in coins. The function should return an object with the number of quarters, dimes, nickels, and pennies needed to make the change.

```js
coinMachine(0.99); // => { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }
```
