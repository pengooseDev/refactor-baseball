const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printError(error) {
    Console.print(error);
    Console.close();
  },
};

module.exports = OutputView;
