class GameModel {
  #computer;

  constructor(Computer) {
    this.#computer = new Computer();
  }

  createNumber() {
    this.#computer.createNumber();
  }

  checkResult(userInput) {
    this.#computer.checkResult(userInput);
  }
}

module.exports = GameModel;
