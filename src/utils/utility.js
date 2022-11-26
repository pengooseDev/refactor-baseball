const checkInclude = (computerNumbers, userNumber) => {
  if (computerNumbers.includes(userNumber)) return true;

  return false;
};

const checkSameIndex = (computerNumber, userNumber, userIndex) => {
  if (computerNumber.indexOf(userNumber) === userIndex) return true;

  return false;
};

module.exports = { checkInclude, checkSameIndex };
