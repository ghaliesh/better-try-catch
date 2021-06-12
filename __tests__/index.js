const { tryCatch } = require("../index");

function functionThatWillError(num) {
  /** I am calling a number */
  num();
}

test("It gracefully returns an error when an error happen", () => {
  const [result, error] = tryCatch(functionThatWillError, 2);
  expect(error).not.toBeNull();
  expect(result).toBeNull();
});
