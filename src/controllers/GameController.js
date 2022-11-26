const { validateUserNumber } = require('../utils/Validator');
const { Console } = require('@woowacourse/mission-utils');

class GameController {
  #view;
  #model;

  constructor(view) {
    this.#view = view;
  }

  start() {
    this.#view.printGameStart();
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
      this.next();
    } catch (error) {
      this.#view.printError(error);
    }
  }

  next() {
    console.log('end');
    Console.close();
  }
}

module.exports = GameController;
