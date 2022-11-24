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
      Console.print(userInput);
      Console.print('end');
      Console.close();
    });
  }
}

module.exports = GameController;
