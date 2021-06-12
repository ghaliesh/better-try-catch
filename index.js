const tryCatchWrapper = function (func) {
  try {
    const result = func();
    return [result, undefined];
  } catch (error) {
    return [null, error];
  }
}

const tryCatch = function (func, ...args) {
  return tryCatchWrapper(func.bind(this, ...args))
}

function test(a, b, c) {
  console.log({a, b, c})
  return a + b + c;
}

const [result, error] = tryCatch(test, 10, 20, 430);

console.log({result, error})