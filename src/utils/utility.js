const { RESULT, BOOLEAN } = require('./constant');

const checkInclude = (computerNumbers, userNumber) => {
  if (computerNumbers.includes(userNumber)) return BOOLEAN.TRUE;

  return BOOLEAN.FALSE;
};

const checkSameIndex = (computerNumber, userNumber, userIndex) => {
  if (computerNumber.indexOf(userNumber) === userIndex) return BOOLEAN.TRUE;

  return BOOLEAN.FALSE;
};

const parseScore = (score) => {
  const { ball, strike } = score;
  const stringBall = ball ? RESULT.BALL(ball) : RESULT.BLANK;
  const stringStrike = strike ? RESULT.STRIKE(strike) : RESULT.BLANK;
  const result =
    stringBall || stringStrike ? RESULT.SCORE(stringBall, stringStrike) : RESULT.NOTHING;

  return result;
};

module.exports = { checkInclude, checkSameIndex, parseScore };
