const { validateUserNumber, validateReplayInput } = require('../utils/validation');
const { Console } = require('@woowacourse/mission-utils');

class GameController {
  #view;
  #model;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  start() {
    this.#view.printGameStart();
    this.generateComputerNumber();
  }

  generateComputerNumber() {
    this.#model.createNumber();
    this.getNumberInput();
  }

  getNumberInput() {
    this.#view.readUserNumber(this.validNumberInput.bind(this));
  }

  validNumberInput(userInput) {
    try {
      validateUserNumber(userInput);
      this.checkResult(userInput);
    } catch (error) {
      this.#view.printError(error);
      this.getNumberInput();
    }
  }

  checkResult(userInput) {
    const userInputArray = userInput.split('').map((string) => Number(string));
    this.#model.checkResult(userInputArray);
    this.playBranch();
  }

  playBranch() {
    this.#view.printScore(this.#model.getScore());
    const isPlayerWin = this.#model.checkPlayerWin();
    if (isPlayerWin) return this.win();

    return this.getNumberInput();
  }

  win() {
    this.#view.printWin();
    this.getReplayInput();
  }

  getReplayInput() {
    this.#view.readReplayGame(this.validReplayInput.bind(this));
  }

  validReplayInput(userInput) {
    try {
      validateReplayInput(userInput);
      this.replayBranch(userInput);
    } catch (error) {
      this.#view.printError(error);
    }
  }

  replayBranch(userInput) {
    if (userInput === '1') return this.generateComputerNumber();
    this.end();
  }

  end() {
    this.#view.printEnd();
    Console.close();
  }
}

module.exports = GameController;
