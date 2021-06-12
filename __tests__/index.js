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
