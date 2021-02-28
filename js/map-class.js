const TRIGGER_VALUE_FIRST = 1;
const TRIGGER_VALUE_SECOND = 4;
const MAP_FLAT_TYPE = {flat: 'Квартира', bungalow: 'Бунгало', house: 'Дом', palace: 'Дворец'};

// Функция для получения занчения мар
const getMapType = (map, key) => {
  return map[key];
};


// Функция для строки заезд + выезд
const printCheckinCheckout = (checkin, checkout) => {
  let result = `Заезд после ${checkin}, выезд до ${checkout}`
  if (checkin === undefined || checkout === undefined) {
    return result = undefined;
  }
  return result;
};

// Функция для выведения строки гости + комнаты
const printRoomsGuests = (rooms, guests) => {
  let printRooms = 'комната для';
  let printGuests = 'гостя';
  let result = `${rooms} ${printRooms} ${guests} ${printGuests}`

  if (rooms > TRIGGER_VALUE_FIRST && rooms <= TRIGGER_VALUE_SECOND) {
    printRooms = 'комнаты для';
  }
  if (rooms > TRIGGER_VALUE_SECOND) {
    printRooms = 'комнат для';
  }
  if (guests > TRIGGER_VALUE_FIRST) {
    printGuests = 'гостей';
  }
  if (rooms === undefined || guests === undefined) {
    return result = undefined;
  }
  return result;
};

const createMap = (object) => {
  const {offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}} = object;
  const map = {
    '.popup__title': title,
    '.popup__text--address': address,
    '.popup__text--price': `${price} ₽/ночь`,
    '.popup__type': getMapType(MAP_FLAT_TYPE, type),
    '.popup__text--capacity': printRoomsGuests(rooms, guests),
    '.popup__text--time': printCheckinCheckout(checkin, checkout),
    '.popup__features': features,
    '.popup__description': description,
    '.popup__photos': photos,
    '.popup__avatar': avatar,
  }
  return map;
};

export {getMapType, createMap};
