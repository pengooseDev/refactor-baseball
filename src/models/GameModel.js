class GameModel {
  #computer;

  constructor(Computer) {
    this.#computer = new Computer();
  }

  createNumber() {
    this.#computer.createNumber();
  }

  getNumber() {
    this.#computer.getNumber();
  }
}

module.exports = GameModel;
