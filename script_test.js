const { expect } = require("chai");
const code = require("./script.js");

describe("higherOrLower", function () {
  it("is a function that returns a string", function () {
    expect(code.higherOrLower).to.be.a("function");
    const result = code.higherOrLower(10, 10);
    expect(result).to.be.a("string");
  });

  it("returns higher if value1 is greater than value2", function () {
    const result = code.higherOrLower(10, 5);
    expect(result).to.equal("higher");
  });

  it("returns lower if value1 is less than value2", function () {
    const result = code.higherOrLower(5, 10);
    expect(result).to.equal("lower");
  });

  it("returns equal if value1 is equal to value2", function () {
    const result = code.higherOrLower(10, 10);
    expect(result).to.equal("equal");
  });

  it("returns error if value1 or value2 is not a number", function () {
    const value1Error = code.higherOrLower("10", 10);
    expect(value1Error).to.equal("error");

    const value2Error = code.higherOrLower(10, "10");
    expect(value2Error).to.equal("error");
  });
});

describe("dvdCollection", function () {
  const testCase = [
    ["c", "b", "a"],
    ["e", "d", "f"],
    ["h", "i", "g"],
  ];

  it("is a function that returns an array of strings", function () {
    expect(code.dvdCollection).to.be.a("function");
    const result = code.dvdCollection(...testCase);
    expect(result).to.be.an("array");
    for (const item of result) {
      expect(item.to.be.a("string"));
    }
  });

  it("returns a single array of strings in alphabetical order", function () {
    const result = code.dvdCollection(...testCase);
    expect(result).to.deep.equal(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
  });
});

describe("studentBody", function () {
  const testStudents = [
    { name: "John", age: 25, grade: 10 },
    { name: "Mary", age: 31, grade: 11 },
    { name: "Steve", age: 18, grade: 19 },
  ];

  it("is a function", function () {
    expect(code.studentBody).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.studentBody(testStudents);
    expect(result).to.be.an("object");
  });

  it("returns an object containing the correct values", function () {
    const result = code.studentBody(testStudents);
    expect(result).to.deep.equal({
      total: 3,
      age: (25 + 31 + 18) / 3,
      grade: (10 + 11 + 19) / 3,
    });
  });
});

//`carFactory(object)` is a function that takes an object as an argument. The object should include a make, model, year of a car, and number of doors. The function should take the object, create a class with the same properties, and compare it to other classes to determine if the vehicle is a motorcycle (0 doors), coupe (2 doors), or a sedan (4 doors). The function should return the type of vehicle.
describe("carFactory", function () {
  //carFactory is a function
  it("is a function", function () {
    expect(code.carFactory).to.be.a("function");
  });

  //carFactory returns a string
  it("returns a string", function () {
    const result = code.carFactory({
      make: "Honda",
      model: "Civic",
      year: 2017,
      doors: 4,
    });
    expect(result).to.be.a("string");
  });

  //carFactory returns a string that is either "motorcycle", "coupe", or "sedan"
  it("returns a string that is either motorcycle, coupe, or sedan", function () {
    const result = code.carFactory({
      make: "Honda",
      model: "Civic",
      year: 2017,
      doors: 4,
    });
    expect(result).to.be.a("string");
    expect(result).to.equal("sedan");
  });
});

//`fruitBasket(array)` is a function that takes an array of strings as an argument.
// The function should take each string and create a class with the name of the fruit as well as the weight.
// The weight should be randomly generated.
// Each fruit should have a prototype like `eat()` that returns a string that says "You ate a [fruit]!"
// and `throwAway()` that returns a string that says "You threw away a [fruit]!" when called.
describe("fruitBasket", function () {
  //fruitBasket is a function
  it("is a function", function () {
    expect(code.fruitBasket).to.be.a("function");
  });

  //fruitBasket returns an array
  it("returns an array", function () {
    const result = code.fruitBasket(["apple", "banana", "orange"]);
    expect(result).to.be.an("array");
  });

  //fruitBasket returns an array of objects
  it("returns an array of objects", function () {
    const result = code.fruitBasket(["apple", "banana", "orange"]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.an("object");
  });

  //fruitBasket returns an array of objects with the correct properties
  it("returns an array of objects with the correct properties", function () {
    const result = code.fruitBasket(["apple", "banana", "orange"]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.an("object");
    expect(result[0].name).to.be.a("string");
    expect(result[0].weight).to.be.a("number");
  });

  //fruitBasket returns an array of objects with the correct properties and methods
  it("returns an array of objects with the correct properties and methods", function () {
    const result = code.fruitBasket(["apple", "banana", "orange"]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.an("object");
    expect(result[0].name).to.be.a("string");
    expect(result[0].weight).to.be.a("number");
    expect(result[0].eat()).to.be.a("string");
    expect(result[0].throwAway()).to.be.a("string");
  });
});

//coinMachine() is a function that takes a number as an argument and returns an object with the number of quarters, dimes, nickels, and pennies that make up the number.
describe("coinMachine", function () {
  //coinMachine is a function
  it("is a function", function () {
    expect(code.coinMachine).to.be.a("function");
  });

  //coinMachine returns an object
  it("returns an object", function () {
    const result = code.coinMachine(123);
    expect(result).to.be.an("object");
  });

  //coinMachine returns an object with the correct number of quarters, dimes, nickels, and pennies
  it("returns an object with the correct number of quarters, dimes, nickels, and pennies", function () {
    const result = code.coinMachine(123);
    expect(result).to.be.an("object");
    expect(result).to.deep.equal({
      quarters: 4,
      dimes: 2,
      nickels: 0,
      pennies: 3,
    });
  });
});
