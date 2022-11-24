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
}

module.exports = LottoView;
