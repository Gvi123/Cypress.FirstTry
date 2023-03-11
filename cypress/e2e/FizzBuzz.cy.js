function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  return "Not a multiple of 3 or 5";
}

function fizzBuzzCheker(array, expectedResult) {
  array.forEach((number) => {
    expect(fizzBuzz(number)).to.eq(expectedResult);
  });
}

describe("FizzBuzz unit tests", () => {
  it("Returns FizzBuzz if numebr is a multiple of 3 and 5", () => {
    fizzBuzzCheker([15, 30, 45, 60, 75], "FizzBuzz");
  });

  it("Returns Fizz if numebr is a multiple of 3", () => {
    fizzBuzzCheker([3, 6, 9, 12, 18, 21], "Fizz");
  });

  it("Returns Buzz if numebr is a multiple of 5", () => {
    fizzBuzzCheker([5, 10, 20, 25, 35, 40], "Buzz");
  });

  it("Returns a string indicating that the number is not multiple by 3 or 5", () => {
    fizzBuzzCheker([1, 2, 4, 7, 8, 11], "Not a multiple of 3 or 5");
  });
  it("Returns fizzBuzz negative number", () => {
    fizzBuzzCheker([-3], "Fizz");
  });
});
