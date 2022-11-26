const ERROR_MESSAGE = Object.freeze({
  INVALID_TYPE: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_RANGE: '[ERROR] 1-9 사이의 값만 입력할 수 있습니다.',
  INVALID_LENGTH: '[ERROR] 세자리 수만 입력할 수 있습니다.',
  DUPLICATED: '[ERROR] 중복된 수는 입력이 불가합니다.',
  INVALID_REPLAY: '[Error] 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const MESSAGE = {
  BLANK: '',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  INPUT_REPLAY: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  OUTPUT_START: '숫자 야구 게임을 시작합니다.',
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  END: '게임 종료을 종료합니다.',
};

const USER_INPUT = Object.freeze({
  REPLAY: '1',
  QUIT: '2',
});

const NUMBER = Object.freeze({
  WIN: 3,
  DEFAULT_BALL: 0,
  DEFAULT_STRIKE: 0,
  NUMBER_LENGTH: 3,
  MIN_RANDOM_NUMBER: 1,
  MAX_RANDOM_NUMBER: 9,
  ZERO: 0,
});

const RESULT = Object.freeze({
  BLANK: '',

  BALL: (ball) => {
    return `${ball}볼`;
  },

  STRIKE: (strike) => {
    return `${strike}스트라이크`;
  },

  SCORE: (ball, strike) => {
    return `${ball} ${strike}`.trim();
  },

  NOTHING: '낫싱',
});

const UNIT = Object.freeze({
  COUNT: 1,
});

const BOOLEAN = Object.freeze({
  TRUE: true,
  FALSE: false,
});

const VALIDATION = Object.freeze({
  NUMBER_REGEX: /^\d+$/g,
  STRING_ZERO: '0',
});

module.exports = {
  ERROR_MESSAGE,
  USER_INPUT,
  UNIT,
  NUMBER,
  RESULT,
  BOOLEAN,
  VALIDATION,
  MESSAGE,
};
