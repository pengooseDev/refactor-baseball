const GameModel = require('./models/GameModel');
const Computer = require('./models/Computer');
const InputView = require('./views/InputView');
const GameView = require('./views/GameView');
const OutputView = require('./views/OutputView');
const GameController = require('./controllers/GameController');

class App {
  #model;
  #view;
  #controller;

  constructor() {
    this.#model = new GameModel(Computer);
    this.#view = new GameView(InputView, OutputView);
    this.#controller = new GameController(this.#model, this.#view);
  }

  play() {
    this.#controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
