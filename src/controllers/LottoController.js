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
      Console.print(2);
      Console.print(userInput);
    });
  }
}

module.exports = GameController;
