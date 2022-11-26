const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      callback(userInput);
    });
  },

  readReplayGame(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
