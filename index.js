const tryCatchWrapper = function (func) {
  try {
    const result = func();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

const asynsCatchWrapper = async function (func) {
  try {
    const result = await func();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

module.exports.tryCatch = function (func, ...args) {
  return tryCatchWrapper(func.bind(this, ...args));
};

module.exports.asyncTryCatch = async function (func, ...args) {
  return await asynsCatchWrapper(func.bind(this, ...args));
};
