const { Console } = require('@woowacourse/mission-utils');

const isNumber = (input) => {
  const numberRegex = /^\d+$/g;
  if (input.match(numberRegex)) return true;

  Console.close();
  throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
};

const validateUserNumber = (userInput) => {
  isNumber(userInput);
};

module.exports = { validateUserNumber };
