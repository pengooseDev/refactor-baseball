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

  checkPlayerWin() {
    return this.#computer.checkPlayerWin();
  }
}

module.exports = GameModel;
