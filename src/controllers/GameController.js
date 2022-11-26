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
      this.create();
    } catch (error) {
      this.#view.printError(error);
    }
  }

  create() {
    console.log('end');
    console.log(this.#model.getNumber());
    Console.close();
  }
}

module.exports = GameController;
