class GameView {
  #inputView;
  #outputView;

  constructor(InputView, OutputView) {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  printGameStart() {
    this.#outputView.printGameStart();
  }

  printError(error) {
    this.#outputView.printError(error);
  }

  readUserNumber(callback) {
    this.#inputView.readUserNumber(callback);
  }
}

module.exports = GameView;
