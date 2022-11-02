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
    const result = code.higherOrLower(5.2, 5.2);
    expect(result).to.equal("equal");
  });

  it("returns error if value1 or value2 is not a number", function () {
    const value1Error = code.higherOrLower("10", 10);
    expect(value1Error).to.equal("error");

    const value2Error = code.higherOrLower(8.3, "10");
    expect(value2Error).to.equal("error");
  });
});

describe("dvdCollection", function () {
  const test = [
    ["c", "b", "a"],
    ["e", "d", "f"],
    ["h", "i", "g"],
  ];

  it("is a function that returns an array of strings", function () {
    expect(code.dvdCollection).to.be.a("function");
    const result = code.dvdCollection(...test);
    expect(result).to.be.an("array");
    for (const item of result) {
      expect(item).to.be.a("string");
    }
  });

  it("returns a single array of strings in alphabetical order", function () {
    const result = code.dvdCollection(...test);
    expect(result).to.deep.equal(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
  });
});

describe("studentBody", function () {
  const test = [
    { name: "Stella", age: 25, grade: 11 },
    { name: "Mohammed", age: 31, grade: 13 },
    { name: "Brian", age: 19, grade: 18 },
  ];

  it("is a function that returns an object", function () {
    expect(code.studentBody).to.be.a("function");
    const result = code.studentBody(test);
    expect(result).to.be.an("object");
  });

  it("returns an object containing the correct values", function () {
    const result = code.studentBody(test);
    expect(result).to.deep.equal({
      total: 3,
      age: (25 + 31 + 19) / 3,
      grade: (11 + 13 + 18) / 3,
    });
  });
});

describe("fruitBasket", function () {
  const test = ["apple", "banana", "orange", "kiwi"];

  it("is a function that returns an array of objects", function () {
    expect(code.fruitBasket).to.be.a("function");
    const result = code.fruitBasket(test);
    expect(result).to.be.an("array");

    for (const fruit of result) {
      expect(fruit).to.be.an("object");
    }
  });

  it("returns an array of objects with the correct types of properties and methods", function () {
    const result = code.fruitBasket(test);
    expect(result).to.be.an("array");
    for (const fruit of result) {
      expect(fruit.name).to.be.a("string");
      expect(fruit.weight).to.be.a("number");
      expect(fruit.eat).to.be.a("function");
      expect(fruit.eat()).to.be.a("string");
      expect(fruit.throwAway).to.be.a("function");
      expect(fruit.throwAway()).to.be.a("string");
    }
  });

  it("returns an array of objects with the correct properties and methods", function () {
    const result = code.fruitBasket(test);
    expect(result).to.have.length(test.length);
    result.forEach((fruit, i) => {
      expect(fruit.name).to.equal(test[i]);
      expect(fruit.weight).to.be.within(1, 10);
      expect(fruit.eat()).to.equal(`You ate a ${fruit.name}!`);
      expect(fruit.throwAway()).to.equal(`You threw away a ${fruit.name}!`);
    });
  });
});

describe("getBooksByLanguage", function () {
  const test = [
    { title: "金雲翹傳", language: "zh" },
    { title: "Kongens Fald", language: "da" },
    { title: "肉蒲團", language: "zh" },
    { title: "Seitsemän veljestä: Kertomus", language: "fi" },
    { title: "The Gold Horns", language: "da" },
    { title: "Kalevala", language: "fi" },
    { title: "Työmiehen vaimo", language: "fi" },
    { title: "封神演義", language: "zh" },
    { title: "Samlede Værker, Andet Bind", language: "da" },
  ];

  it("is a function that returns an object", function () {
    expect(code.getBooksByLanguage).to.be.a("function");
    const result = code.getBooksByLanguage(test);
    expect(result).to.be.an("object");
  });

  it("returns an object where each value is an array of strings", function () {
    const result = code.getBooksByLanguage(test);
    for (const key in result) {
      expect(result[key]).to.be.an("array");
      for (const elem of result[key]) {
        expect(elem).to.be.a("string");
      }
    }
  });

  it("returns an object with the correct languages and titles", function () {
    const result = code.getBooksByLanguage(test);
    const expected = {
      zh: ["金雲翹傳", "封神演義", "肉蒲團"],
      fi: ["Kalevala", "Seitsemän veljestä: Kertomus", "Työmiehen vaimo"],
      da: ["Samlede Værker, Andet Bind", "Kongens Fald", "The Gold Horns"],
    };
    expect(Object.keys(result)).to.have.members(Object.keys(expected));
    for (const l in result) {
      expect(result[l]).to.have.members(expected[l]);
    }
  });

  it("returns an empty object when books is empty", function () {
    const result = code.getBooksByLanguage([]);
    expect(result).to.eql({});
  });
});

describe.skip("coinMachine", function () {
  it("is a function", function () {
    expect(code.coinMachine).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.coinMachine(123);
    expect(result).to.be.an("object");
  });

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
