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

  printScore(score) {
    this.#outputView.printScore(score);
  }

  printWin() {
    this.#outputView.printWin();
  }

  printEnd() {
    this.#outputView.printEnd();
  }

  readUserNumber(callback) {
    this.#inputView.readUserNumber(callback);
  }

  readReplayGame(callback) {
    this.#inputView.readReplayGame(callback);
  }
}

module.exports = GameView;
