const LottoController = require('./controllers/LottoController');
const InputView = require('./views/InputView');
const LottoView = require('./views/LottoView');
const OutputView = require('./views/OutputView');

class App {
  #view;
  #controller;

  constructor() {
    this.#view = new LottoView(InputView, OutputView);
    this.#controller = new LottoController(this.#view);
  }

  play() {
    this.#controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
