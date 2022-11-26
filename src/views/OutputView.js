const { Console } = require('@woowacourse/mission-utils');
const { parseScore } = require('../utils/utility');

const OutputView = {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printError(error) {
    Console.print(error);
  },

  printScore(score) {
    Console.print(parseScore(score));
  },

  printWin() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

module.exports = OutputView;
