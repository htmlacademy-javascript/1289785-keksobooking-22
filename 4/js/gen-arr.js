import {getRandomInt, getRandomСoordinate} from './util.js';

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIME = ['12:00', '13:00', '14:00'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const TITLE = ['Вилла в Греции на берегу моря, для большой семьи', 'Уютный домик в самом сердце Амстердама', 'Уютные аппартаменты для путешествующих с котом', 'Стильные аппартаменты в центре Милана'];
const MIN_ARR_LENGTH = 1;
const MIN = 0;
const PRICE = [2000, 3000, 5900, 12000, 6900, 1000];
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const MAX_ROOMS = 8;
const MAX_GUESTS = 20;
const DESCRIPTION = ['Вид на прекрасный сад с апельсинами и качелями, море в пешей доступности!', 'Тихая гавань в никогда не спящем городе, с велосипедом и камином!!!', 'Ваш питомец не будет скучать пока вы будете наслаждаться путешествием, мау!', 'Все самые последние писки моды, специально для вас!'];
const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;
const DECIMAL_PLACE_X = 2;
const DECIMAL_PLACE_Y = 3;
const SIMILAR_ADS_COUNT = 10;

//Функция для avatara
const getAvatar = () => {
  return 'img/avatars/user0' + getRandomInt(1,8) + '.png';
};
// Функция для возврата элемента массива
const getArrElement = (array) => {
  return array[getRandomInt(MIN, array.length-1)];
};

// Функция для возврата массива случайной длинны
const getRandomArr = (array) => {
  const newArr = Array.from(array);
  newArr.length = getRandomInt(MIN_ARR_LENGTH, array.length);
  return newArr;
};

const createAd = () => {
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getArrElement(TITLE),
      address: getRandomСoordinate(MIN_X, MAX_X, DECIMAL_PLACE_X) + ' , ' +  getRandomСoordinate(MIN_Y, MAX_Y, DECIMAL_PLACE_Y),
      price: getArrElement(PRICE),
      type: getArrElement(TYPE),
      rooms: getRandomInt(MIN, MAX_ROOMS),
      guests: getRandomInt(MIN, MAX_GUESTS),
      checkin: getArrElement(TIME),
      checkout: getArrElement(TIME),
      features: getRandomArr(FEATURES),
      description: getArrElement(DESCRIPTION),
      photos: getRandomArr(PHOTOS),
    },
    location: {
      x: getRandomСoordinate(MIN_X, MAX_X, DECIMAL_PLACE_X),
      y: getRandomСoordinate(MIN_Y, MAX_Y, DECIMAL_PLACE_Y),
    },
  };
};

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

similarAds;
