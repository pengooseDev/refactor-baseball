const checkInclude = (computerNumbers, userNumber) => {
  if (computerNumbers.includes(userNumber)) return true;

  return false;
};

const checkSameIndex = (computerNumber, userNumber, userIndex) => {
  if (computerNumber.indexOf(userNumber) === userIndex) return true;

  return false;
};

const parseScore = (score) => {
  const { ball, strike } = score;
  const stringBall = ball ? `${ball}볼` : '';
  const stringStrike = strike ? `${strike}스트라이크` : '';
  const result = stringBall || stringStrike ? `${stringBall} ${stringStrike}`.trim() : '낫싱';

  return result;
};

module.exports = { checkInclude, checkSameIndex, parseScore };
