const { Console } = require('@woowacourse/mission-utils');

const errorHandler = (successCallback, errorCallback) => {
  try {
    successCallback();
  } catch (error) {
    Console.print('ERROR_BOUNDARY!!!!!');
    errorCallback();
  }
};

module.exports = errorHandler;
