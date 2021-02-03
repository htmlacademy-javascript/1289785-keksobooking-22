// todo: Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => {
  if (min > max) {
    let temporalMax = max;
    max = min;
    min = temporalMax;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// todo: Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно,
// todo: с указанным параметром количества знаков после запятой
const getRandomСoordinate = (min, max, decimalPlaces) => {
  if (min > max) {
    let temporalMax = max;
    max = min;
    min = temporalMax;
  }

  return Number((Math.random() * (max - min + 1) + min).toFixed(decimalPlaces));
};

getRandomInt(2, 20);
getRandomСoordinate(2, 20, 4);
