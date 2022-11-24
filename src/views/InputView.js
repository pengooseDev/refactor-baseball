const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      Console.print(userInput);
      callback(userInput);
    });
  },
};

module.exports = InputView;
