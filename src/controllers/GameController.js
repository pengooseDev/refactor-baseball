const { validateUserNumber } = require('../utils/validation');
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
    this.#model.createNumber();
    this.getUserInput();
  }

  getUserInput() {
    this.#view.readUserNumber((userInput) => {
      this.validUserInput(userInput);
    });
  }

  validUserInput(userInput) {
    try {
      validateUserNumber(userInput);
      this.checkResult(userInput);
    } catch (error) {
      this.#view.printError(error);
      this.getUserInput();
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

    return this.getUserInput();
  }

  win() {
    console.log('win');
    Console.close();
  }
}

module.exports = GameController;
