const log = console.log;

const tryCatchWrapper = function (func) {
  try {
    func();
  } catch (error) {
    console.log("Error happened");
  }
}

const tryCatch = function (func, arg) {
  return tryCatchWrapper(func.bind(this, arg))
}

function test(a) {
  console.log({a})
  console.log(window.mm.a);
}

tryCatch(test.bind(this, 1));
