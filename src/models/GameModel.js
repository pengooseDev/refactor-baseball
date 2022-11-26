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

  getScore() {
    return this.#computer.getScore();
  }
}

module.exports = GameModel;
