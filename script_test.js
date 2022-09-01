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
    expect(result).to.be.an("string");
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
  }
  );

  //test if value is equal to result return equal
  it("returns equal if value is equal to result", function () {
    const result = code.higherOrLower(10, 10);
    expect(result).to.equal("equal");
  }
  );

  //test if value is not a number return error
  it("returns error if value is not a number", function () {
    const result = code.higherOrLower("10", 10);
    expect(result).to.equal("error");
  }
  );
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
  }
  );

  //calculate the average grade of the students
  it("returns the average grade of the students", function () {
    const result = code.studentBody([
      { name: "John", grade: 25 },
      { name: "Mary", grade: 31 },
      { name: "Steve", grade: 18 },
    ]);
    expect(result).to.equal(24.666666666666668);
  }
  );

  //function returns total number of students, average age, and average grade of the students
  it("returns the total number of students, average age, and average grade of the students", function () {
    const result = code.studentBody([
      { name: "John", age: 25, grade: 100 },
      { name: "Mary", age: 31, grade: 100 },
      { name: "Steve", age: 18, grade: 100 },
    ]);
    expect(result).to.equal(3, 24.666666666666668, 100);
  }
  );
});

//given an object called "dvdCollection" with a list of movies, stars, year produced, and rating
describe("dvdCollection", function () {
  //dvds is a function
  it("is a function", function () {
    expect(code.dvds).to.be.a("function");
  }
  );

  //dvds returns an array
  it("returns an array", function () {
    const result = code.dvds([
      { title: "The Godfather", stars: "Marlon Brando", year: 1972, rating: 5 },
      { title: "The Shawshank Redemption", stars: "Tim Robbins", year: 1994, rating: 5 },
      { title: "The Dark Knight", stars: "Christian Bale", year: 2008, rating: 5 },
    ]);
    expect(result).to.be.an("array");
  }
  );

  //expect value "titles" to be an array of strings with all of the movie titles
  it("returns an array of strings with all of the movie titles", function () {
    const result = code.dvds([
      { title: "The Godfather", stars: "Marlon Brando", year: 1972, rating: 5 },
      { title: "The Shawshank Redemption", stars: "Tim Robbins", year: 1994, rating: 5 },
      { title: "The Dark Knight", stars: "Christian Bale", year: 2008, rating: 5 },
    ]);
    expect(result[0]).to.be.an("string");
  }
  );

  //calculate the median year of the movies
  it("returns the median year of the movies", function () {
    const result = code.dvds([
      { title: "The Godfather", stars: "Marlon Brando", year: 1972, rating: 5 },
      { title: "The Shawshank Redemption", stars: "Tim Robbins", year: 1994, rating: 5 },
      { title: "The Dark Knight", stars: "Christian Bale", year: 2008, rating: 5 },
    ]);
    expect(result).to.equal(1994);
  }
  );

  //give the The Godfather a rating of 1 star
  it("returns the The Godfather a rating of 1 star", function () {
    const result = code.dvds([
      { title: "The Godfather", stars: "Marlon Brando", year: 1972, rating: 5 },
      { title: "The Shawshank Redemption", stars: "Tim Robbins", year: 1994, rating: 5 },
      { title: "The Dark Knight", stars: "Christian Bale", year: 2008, rating: 5 },
    ]);
    expect(result[0].rating).to.equal(1);
  }
  );
});

//a function called "carFactory" with a new constructor that creates a new object called "Car"
describe("carFactory", function () {
  //carFactory is a function
  it("is a function", function () {
    expect(code.carFactory).to.be.a("function");
  }
  );

  //carFactory returns an object
  it("returns an object", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result).to.be.an("object");
  }
  );

  //carFactory returns an object with a make property
  it("returns an object with a make property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.make).to.be.a("string");
  }
  );

  //carFactory returns an object with a model property
  it("returns an object with a model property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.model).to.be.a("string");
  }
  );

  //carFactory returns an object with a year property
  it("returns an object with a year property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.year).to.be.a("number");
  }
  );

  //carFactory returns an object with a miles property
  it("returns an object with a miles property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.miles).to.be.a("number");
  }
  );

  //carFactory returns an object with a color property
  it("returns an object with a color property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.color).to.be.a("string");
  }
  );

  //carFactory returns an object with a drive like authomatic or standard property
  it("returns an object with a drive property", function () {
    const result = code.carFactory("Toyota", "Corolla", 2015, 20000, "black");
    expect(result.drive).to.be.a("function");
  }
  );
});