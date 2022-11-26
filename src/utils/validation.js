const isNumber = (userInput) => {
  const numberRegex = /^\d+$/g;
  if (userInput.match(numberRegex)) return true;

  throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
};

const isValidRange = (userInput) => {
  if (!userInput.includes('0')) return;

  throw new Error('[ERROR] 1-9 사이의 값만 입력할 수 있습니다.');
};

const isValidLength = (userInput) => {
  if (userInput.length === 3) return;

  throw new Error('[ERROR] 세자리 수만 입력할 수 있습니다.');
};

const isDuplicated = (userInput) => {
  const inputArray = userInput.split('');
  const filtered = inputArray.filter((value, index) => inputArray.indexOf(value) !== index);
  if (filtered.length === 0) return;

  throw new Error('[ERROR] 중복된 수는 입력이 불가합니다.');
};

const validateUserNumber = (userInput) => {
  isNumber(userInput);
  isValidRange(userInput);
  isValidLength(userInput);
  isDuplicated(userInput);
};

/* replayInput */
const validateReplayInput = (userInput) => {
  if (userInput === '1' || userInput === '2') return;

  throw new Error('[Error] 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
};

module.exports = { validateUserNumber, validateReplayInput };
