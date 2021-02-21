import {getRandomInt, getRandomСoordinate, getRandomArr, getArrElement} from './util.js';

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const FEATURES = [];
const TIME = ['12:00', '13:00', '14:00'];
// const TIME = [];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// const PHOTOS = [];
const TITLE = ['Вилла в Греции на берегу моря, для большой семьи', 'Уютный домик в самом сердце Амстердама', 'Уютные аппартаменты для путешествующих с котом', 'Стильные аппартаменты в центре Милана'];
// const TITLE = [];
const MIN_USER_AVATAR = 1;
const MAX_USER_AVATAR = 8;
const MIN_INT_VALUE = 1;
const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const MIN_ARR_LENGTH = 1;
const MIN_ARR_ELEMENT = 0;
const PRICE = [2000, 3000, 5900, 12000, 6900, 1000];
// const PRICE = [];
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
// const TYPE = [];
const MAX_ROOMS = 8;
const MAX_GUESTS = 20;
const DESCRIPTION = ['Вид на прекрасный сад с апельсинами и качелями, море в пешей доступности!', 'Тихая гавань в никогда не спящем городе, с велосипедом и камином!!!', 'Ваш питомец не будет скучать пока вы будете наслаждаться путешествием, мау!', 'Все самые последние писки моды, специально для вас!'];
// const DESCRIPTION = [];
const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;
const DECIMAL_PLACE_X = 2;
const DECIMAL_PLACE_Y = 3;
const SIMILAR_ADS_COUNT = 10;

// Функция для заполнения src фото
const printPhoto = (PHOTOS, arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[i].src = PHOTOS[i];
  }
};

// Функция для строки заезд + выезд
const printCheckinCheckout = (checkin, checkout) => {
  return `Заезд после ${checkin}, выезд до ${checkout}`;
};

// Функция для выведения строки гости + комнаты
const printRoomsGuests = (rooms, guests) => {
  let printRooms = 'комната для';
  let printGuests = 'гостя';
  if (rooms > TRIGGER_VALUE_FIRST && rooms <= TRIGGER_VALUE_SECOND) {
    printRooms = 'комнаты для';
  }
  if (rooms > TRIGGER_VALUE_SECOND) {
    printRooms = 'комнат для';
  }
  if (guests > TRIGGER_VALUE_FIRST) {
    printGuests = 'гостей';
  }
  return `${rooms} ${printRooms} ${guests} ${printGuests}`;
};

const getAppartType = (type, arr) => {
  return arr[type];
};

//Функция для avatara
const getAvatar = (min, max) => {
  return 'img/avatars/user0' + getRandomInt(min, max) + '.png';
};

// Создаем объект
const createAd = () => {
  return {
    author: {
      avatar: getAvatar(MIN_USER_AVATAR, MAX_USER_AVATAR),
      // avatar: undefined,
    },
    offer: {
      title: getArrElement(TITLE, MIN_ARR_ELEMENT),
      // title: undefined,
      address: getRandomСoordinate(MIN_X, MAX_X, DECIMAL_PLACE_X) + ' , ' +  getRandomСoordinate(MIN_Y, MAX_Y, DECIMAL_PLACE_Y),
      // address: undefined,
      price: getArrElement(PRICE, MIN_ARR_ELEMENT),
      // price: undefined,
      type: getArrElement(TYPE, MIN_ARR_ELEMENT),
      // type: undefined,
      rooms: getRandomInt(MIN_INT_VALUE, MAX_ROOMS),
      // rooms: undefined,
      guests: getRandomInt(MIN_INT_VALUE, MAX_GUESTS),
      // guests: undefined,
      checkin: getArrElement(TIME, MIN_ARR_ELEMENT),
      // checkin: undefined,
      checkout: getArrElement(TIME, MIN_ARR_ELEMENT),
      // checkout: undefined,
      features: getRandomArr(FEATURES, MIN_ARR_LENGTH),
      description: getArrElement(DESCRIPTION, MIN_ARR_ELEMENT),
      // description: undefined,
      photos: getRandomArr(PHOTOS, MIN_ARR_LENGTH),
    },
    location: {
      x: getRandomСoordinate(MIN_X, MAX_X, DECIMAL_PLACE_X),
      y: getRandomСoordinate(MIN_Y, MAX_Y, DECIMAL_PLACE_Y),
    },
  };
};

const adObject = createAd();
//todo: Это нормально, что у меня много констант со значение 1 или можно просто создать константу со занчение 1 и 0 и вставлять их там где они нужны?
// todo: Оставила закоментированными строки с пустыми массивами и undefined для проверки работы hidden-режима
// todo: При подставлении undefined в значение features и photos, все ломалось, не придумала как это обойти как это обойти
export {adObject, getAppartType, printRoomsGuests, printCheckinCheckout, printPhoto, SIMILAR_ADS_COUNT};
