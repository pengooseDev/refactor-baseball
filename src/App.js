const GameController = require('./controllers/GameController');
const InputView = require('./views/InputView');
const GameView = require('./views/GameView');
const OutputView = require('./views/OutputView');

class App {
  #view;
  #controller;

  constructor() {
    this.#view = new GameView(InputView, OutputView);
    this.#controller = new GameController(this.#view);
  }

  play() {
    this.#controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
