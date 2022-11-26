const { Random } = require('@woowacourse/mission-utils');

const NumberGenerator = {
  generate: () => {
    const numberSet = new Set();
    while (numberSet.size !== 3) {
      numberSet.add(Random.pickNumberInRange(1, 9));
    }

    return [...numberSet];
  },
};

module.exports = NumberGenerator;
