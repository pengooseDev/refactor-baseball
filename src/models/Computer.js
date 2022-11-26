const NumberGenerator = require('./NumberGenerator');

class Computer {
  #number;
  #numberGenerator = NumberGenerator;

  createNumber() {
    this.#number = this.#numberGenerator.generate();
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = Computer;
