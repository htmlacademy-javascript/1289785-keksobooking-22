export {getRandomInt, getRandomСoordinate};

const getRandomInt = (min, max) => {
  if (min > max) {
    let temporalMax = max;
    max = min;
    min = temporalMax;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomСoordinate = (min, max, decimalPlaces) => {
  if (min > max) {
    let temporalMax = max;
    max = min;
    min = temporalMax;
  }

  return Number((Math.random() * (max - min + 1) + min).toFixed(decimalPlaces));
};
