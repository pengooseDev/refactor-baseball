const { Console } = require('@woowacourse/mission-utils');

class LottoView {
  #inputView;
  #outputView;

  constructor(InputView, OutputView) {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  printGameStart() {
    this.#outputView.printGameStart();
  }

  readUserNumber(callback) {
    this.#inputView.readUserNumber(callback);
  }
}

module.exports = LottoView;
