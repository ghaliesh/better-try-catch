const { asyncTryCatch } = require("../index");

const functionWillPass = async (args) => {
  return await Promise.resolve(args);
};

test("It returns expected result when no error", async () => {
  const args = Math.random();
  const [result] = await asyncTryCatch(functionWillPass, args);
  expect(args).toEqual(result);
});

const functionShouldBeCalled = jest.fn(functionWillPass);

test("It calls the function passed to it", async () => {
  await asyncTryCatch(functionShouldBeCalled);
  expect(functionShouldBeCalled).toHaveBeenCalled();
});

const functionWillFail = async () => {
  throw new Error({ message: "Error" });
};

test("It returns an error when error occur", async () => {
  const [_, error] = await asyncTryCatch(functionWillFail);
  expect(error).not.toBeNull();
});
