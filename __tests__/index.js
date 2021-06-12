const { tryCatch } = require("../index");

const functionToBeCalled = jest.fn();
test("It calls the function passed to it with correct arguments", () => {
  const args = [1, 2, 3, { a: "" }, [], null];
  tryCatch(functionToBeCalled, ...args);
  expect(functionToBeCalled).toHaveBeenCalledWith(...args);
});

function functionThatWillError(num) {
  /** I am calling a number */
  num();
}

test("It gracefully returns an error when an error happen", () => {
  const [result, error] = tryCatch(functionThatWillError, 2);
  expect(error).not.toBeNull();
  expect(result).toBeNull();
});

const returnValue = 10;
function functionThatWillPass() {
  return returnValue;
}

test("It returns a result with no error", () => {
  const [result, error] = tryCatch(functionThatWillPass);
  expect(result).not.toBeNull();
  expect(result).toEqual(returnValue);
  expect(error).toBeNull();
});

function voidfunctionThatWillPass() {
  Promise.resolve("Hi");
}

test("It returns undefined as a result with no error", () => {
  const [result, error] = tryCatch(voidfunctionThatWillPass);
  expect(result).not.toBeNull();
  /** void function returns undefined */
  expect(result).toEqual(undefined);
  expect(error).toBeNull();
});
