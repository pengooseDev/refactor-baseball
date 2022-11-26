const NumberGenerator = require('./NumberGenerator');
const { checkInclude, checkSameIndex } = require('../utils/utility');

class Computer {
  #number;
  #numberGenerator = NumberGenerator;
  #score = {
    ball: 0,
    strike: 0,
  };

  createNumber() {
    this.#number = this.#numberGenerator.generate();
    console.log(this.#number);
  }

  checkResult(userInput) {
    this.resetScore();
    userInput.map((value, index) => {
      this.checkScore(value, index);
    });
    console.log(this.#score);
  }

  checkScore(value, index) {
    const isInclude = checkInclude(this.#number, value);
    const isSameIndex = checkSameIndex(this.#number, value, index);
    if (isInclude && isSameIndex) return (this.#score.strike += 1);
    if (isInclude) return (this.#score.ball += 1);
  }

  checkPlayerWin() {
    return this.#score.strike === 3;
  }

  getScore() {
    return this.#score;
  }

  resetScore() {
    this.#score = {
      ball: 0,
      strike: 0,
    };
  }
}

module.exports = Computer;
