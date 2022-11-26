const NumberGenerator = require('./NumberGenerator');
const { checkInclude, checkSameIndex } = require('../utils/utility');
const { UNIT, NUMBER } = require('../utils/constant');

class Computer {
  #number;
  #numberGenerator = NumberGenerator;
  #score = {
    ball: NUMBER.DEFAULT_BALL,
    strike: NUMBER.DEFAULT_STRIKE,
  };

  createNumber() {
    this.#number = this.#numberGenerator.generate();
  }

  checkResult(userInput) {
    this.resetScore();
    userInput.map((value, index) => {
      this.checkScore(value, index);
    });
  }

  checkScore(value, index) {
    const isInclude = checkInclude(this.#number, value);
    const isSameIndex = checkSameIndex(this.#number, value, index);
    if (isInclude && isSameIndex) return (this.#score.strike += UNIT.COUNT);
    if (isInclude) return (this.#score.ball += UNIT.COUNT);
  }

  checkPlayerWin() {
    return this.#score.strike === NUMBER.WIN;
  }

  getScore() {
    return this.#score;
  }

  resetScore() {
    this.#score = {
      ball: NUMBER.DEFAULT_BALL,
      strike: NUMBER.DEFAULT_STRIKE,
    };
  }
}

module.exports = Computer;
