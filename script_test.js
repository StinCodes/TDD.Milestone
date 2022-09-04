const { expect } = require("chai");
const code = require("./script.js");

describe("higherOrLower", function () {
  it("is a function", function () {
    expect(code.higherOrLower).to.be.a("function");
  });

  it("returns a string", function () {
    const result = code.higherOrLower(
      "higher", "lower", "equal"
    );
    expect(result).to.be.a("string");
  });

  //test if value is great than result return higher
  it("returns higher if value is greater than result", function () {
    const result = code.higherOrLower(10, 5);
    expect(result).to.equal("higher");
  });

  //test if value is less than result return lower
  it("returns lower if value is less than result", function () {
    const result = code.higherOrLower(5, 10);
    expect(result).to.equal("lower");
  });

  //test if value is equal to result return equal
  it("returns equal if value is equal to result", function () {
    const result = code.higherOrLower(10, 10);
    expect(result).to.equal("equal");
  });

  //test if value is not a number return error
  it("returns error if value is not a number", function () {
    const result = code.higherOrLower("10", 10);
    expect(result).to.equal("error");
  });
});

//calls a function called "studentBody" that maps an array of students and returns an array of their names
describe("studentBody", function () {
  it("is a function", function () {
    expect(code.studentBody).to.be.a("function");
  });

  //test if studentBody returns an array of objects
  it("returns an array", function () {
    const result = code.studentBody([
      { name: "John", age: 25 },
      { name: "Mary", age: 31 },
      { name: "Steve", age: 18 },
    ]);
    expect(result).to.be.an("array");
  });

  //ensure every student has a name, age, and grade
  it("returns an array of objects", function () {
    const result = code.studentBody([
      { name: "John", age: 25, grade: 100 },
      { name: "Mary", age: 31, grade: 100 },
      { name: "Steve", age: 18, grade: 100 },
    ]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.an("object");
    expect(result[0].name).to.be.a("string");
    expect(result[0].age).to.be.a("number");
    expect(result[0].grade).to.be.a("number");
  });

  //calculate the average age of the students
  it("returns the average age of the students", function () {
    const result = code.studentBody([
      { name: "John", age: 25 },
      { name: "Mary", age: 31 },
      { name: "Steve", age: 18 },
    ]);
    expect(result).to.equal(24.666666666666668);
  });

  //calculate the average grade of the students
  it("returns the average grade of the students", function () {
    const result = code.studentBody([
      { name: "John", grade: 25 },
      { name: "Mary", grade: 31 },
      { name: "Steve", grade: 18 },
    ]);
    expect(result).to.equal(24.666666666666668);
  });

  //function returns total number of students, average age, and average grade of the students
  it("returns the total number of students, average age, and average grade of the students", function () {
    const result = code.studentBody([
      { name: "John", age: 25, grade: 100 },
      { name: "Mary", age: 31, grade: 100 },
      { name: "Steve", age: 18, grade: 100 },
    ]);
    expect(result).to.equal(3, 24.666666666666668, 100);
  });
});

//given three arrays of strings to combine and return a single alphabetical array
describe("dvdCollection", function () {
  //dvds is a function
  it("is a function", function () {
    expect(code.dvds).to.be.a("function");
  });

  //dvds returns an array
  it("returns an array", function () {
    const result = code.dvds(["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]);
    expect(result).to.be.an("array");
  });

  //dvds returns an array of strings
  it("returns an array of strings", function () {
    const result = code.dvds(["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.a("string");
  });

  //dvds returns an array of strings in alphabetical order
  it("returns an array of strings in alphabetical order", function () {
    const result = code.dvds(["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]);
    expect(result).to.be.an("array");
    expect(result[0]).to.be.a("string");
    expect(result).to.deep.equal(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
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