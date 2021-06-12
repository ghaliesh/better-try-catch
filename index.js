const log = console.log;

const tryCatchWrapper = function (func) {
  try {
    func();
  } catch (error) {
    console.log("Error happened");
  }
}

const tryCatch = function (func, ...args) {
  return tryCatchWrapper(func.bind(this, ...args))
}

function test(a, b, c) {
  console.log({a, b, c})
  console.log(window.mm.a);
}

tryCatch(test, 10, 20, 430);
