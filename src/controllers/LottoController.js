class GameController {
  #view;
  #model;

  constructor(view) {
    this.#view = view;
  }

  start() {
    this.#view.printGameStart();
  }
}

module.exports = GameController;
