const tryCatchWrapper = function (func) {
  try {
    const result = func();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

module.exports.tryCatch = function (func, ...args) {
  return tryCatchWrapper(func.bind(this, ...args))
}
