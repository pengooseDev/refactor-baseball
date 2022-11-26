const { ERROR_MESSAGE, USER_INPUT, VALIDATION, BOOLEAN, NUMBER, RESULT } = require('./constant');

const isNumber = (userInput) => {
  const numberRegex = VALIDATION.NUMBER_REGEX;
  if (userInput.match(numberRegex)) return BOOLEAN.TRUE;

  throw new Error(ERROR_MESSAGE.INVALID_TYPE);
};

const isValidRange = (userInput) => {
  if (!userInput.includes(VALIDATION.STRING_ZERO)) return;

  throw new Error(ERROR_MESSAGE.INVALID_RANGE);
};

const isValidLength = (userInput) => {
  if (userInput.length === NUMBER.NUMBER_LENGTH) return;

  throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
};

const isDuplicated = (userInput) => {
  const inputArray = userInput.split(RESULT.BLANK);
  const filtered = inputArray.filter((value, index) => inputArray.indexOf(value) !== index);
  if (filtered.length === NUMBER.ZERO) return;

  throw new Error(ERROR_MESSAGE.DUPLICATED);
};

const validateUserNumber = (userInput) => {
  isNumber(userInput);
  isValidRange(userInput);
  isValidLength(userInput);
  isDuplicated(userInput);
};

/* replayInput */
const validateReplayInput = (userInput) => {
  if (userInput === USER_INPUT.REPLAY || userInput === USER_INPUT.QUIT) return;

  throw new Error(ERROR_MESSAGE.INVALID_REPLAY);
};

module.exports = { validateUserNumber, validateReplayInput };
