const { Console } = require('@woowacourse/mission-utils');
const { parseScore } = require('../utils/utility');
const { MESSAGE } = require('../utils/constant');

const OutputView = {
  printGameStart() {
    Console.print(MESSAGE.OUTPUT_START);
    Console.print(MESSAGE.BLANK);
  },

  printError(error) {
    Console.print(error);
  },

  printScore(score) {
    Console.print(MESSAGE.BLANK);
    Console.print(parseScore(score));
    Console.print(MESSAGE.BLANK);
  },

  printWin() {
    Console.print(MESSAGE.WIN);
    Console.print(MESSAGE.BLANK);
  },

  printEnd() {
    Console.print(MESSAGE.BLANK);
    Console.print(MESSAGE.END);
  },
};

module.exports = OutputView;
