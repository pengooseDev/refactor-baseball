const { Console } = require('@woowacourse/mission-utils');
const { parseScore } = require('../utils/utility');

const OutputView = {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.print('');
  },

  printError(error) {
    Console.print(error);
  },

  printScore(score) {
    Console.print('');
    Console.print(parseScore(score));
    Console.print('');
  },

  printWin() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('');
  },

  printEnd() {
    Console.print('');
    Console.print('게임 종료을 종료합니다.');
  },
};

module.exports = OutputView;
