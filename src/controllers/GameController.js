const { validateUserNumber } = require('../utils/Validator');
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
    }
  }

  checkResult(userInput) {
    const userInputArray = userInput.split('').map((string) => Number(string));
    this.#model.checkResult(userInputArray);
    Console.close();
  }
}

module.exports = GameController;
