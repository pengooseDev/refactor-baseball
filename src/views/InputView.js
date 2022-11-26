const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constant');

const InputView = {
  readUserNumber(callback) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (userInput) => {
      callback(userInput);
    });
  },

  readReplayGame(callback) {
    Console.readLine(MESSAGE.INPUT_REPLAY, (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
