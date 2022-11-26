const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../utils/constant');

const NumberGenerator = {
  generate: () => {
    const numberSet = new Set();
    while (numberSet.size !== NUMBER.NUMBER_LENGTH) {
      numberSet.add(Random.pickNumberInRange(NUMBER.MIN_RANDOM_NUMBER, NUMBER.MAX_RANDOM_NUMBER));
    }

    return [...numberSet];
  },
};

module.exports = NumberGenerator;
