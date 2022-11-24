const { Console } = require('@woowacourse/mission-utils');
const { validateUserNumber } = require('../utils/Validator');

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      validateUserNumber(userInput);
      callback(userInput);
    });
  },
};

module.exports = InputView;
