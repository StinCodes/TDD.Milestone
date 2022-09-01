# TDD: JavaScript

## Getting Started

1. Clone this repo.
2. In your terminal, run `npm install`.
3. In your terminal, run `npm test`.
4. Edit `script.js` until you are passing all test cases!
5. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
6. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Exercises

### higherOrLower

`higherOrLower(value, value)` takes two numbers as opposing arguments. The function then uses conditional statements to determine if the first value is higher, lower, or equal to the second value.

`higherOrLower(5, 6); // => {"lower"}`
`higherOrLower(6, 5); // => {"higher"}`
`higherOrLower(6, 6); // => {"equal"}`

### studentBody

`studentBody(array)` is a function that takes an array as an argument. The array should include a name, age, and grade of each student. The function should return the total number of students in the array, the average age of all students, and the average grade of all students.

```js 
studentBody([ 
  { name: "John", age: 15, grade: 10 }, 
  { name: "Jane", age: 16, grade: 11 }, 
  { name: "Jack", age: 17, grade: 12 }
 ]); // => { total: 3, age: 16, grade: 11 }
```
 
### dvdCollection

`dvdCollection(array)` is a function that takes an array as an argument. The array should include the title, stars, year, and rating year of each DVD. The function should return the total number of DVDs in the array, the median release year of all DVDs, and the average length of all DVDs.

```js
console.log()
```

### carFactory

`carFactory(car)` will take an object as an argument. The object should include a make, model, number of miles, and year. The function should use a constructor function to create a new car object with the same properties as the argument object. The function should then return the new car object.

```js
carFactory({ make: "Toyota", model: "Camry", miles: 10000, year: 2010 }); // => { make: "Toyota", model: "Camry", miles: 10000, year: 2010 }
```