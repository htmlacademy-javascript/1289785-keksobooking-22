import {printRoomsGuests} from './ad-object.js';

const IMG_HEIGHT = 40;
const IMG_WIDTH = 45;
const IMG_ALT = 'Фотография жилья';
const MAP_FLAT_TYPE = {flat: 'Квартира', bungalow: 'Бунгало', house: 'Дом', palace: 'Дворец'};
const mapCanvas = document.querySelector('#map-canvas');
const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
const addsFragment = document.createDocumentFragment();
// const adObject = createAd();

// Функция для определения типа аппартаментов
const getAppartType = (type, arrElement) => {
  return arrElement[type];
};

// Функция для строки заезд + выезд
const printCheckinCheckout = (checkin, checkout) => {
  return `Заезд после ${checkin}, выезд до ${checkout}`;
};

// Функция для отчиски коллекции
const clearHTMLCollection = (element) => {
  const collection = element.children;
  for (let i = collection.length-1; i >= 0; i--) {
    const child = collection[i];
    child.parentElement.removeChild(child);
  }
};

// Функция для создания списка элементов в блоке Feature
const createFeatures = (docElement, arr) => {
  clearHTMLCollection(docElement);
  arr.forEach((element) => {
    const newElement = document.createElement('li');
    newElement.classList.add('popup__feature');
    newElement.classList.add(`popup__feature--${element}`);
    docElement.appendChild(newElement);
  });
  return docElement;
};

// Функция для создания элементов в блоке Photos
const createPhotos = (docElement, arr) => {
  clearHTMLCollection(docElement);
  arr.forEach((element) => {
    const newImgElement = document.createElement('img');
    newImgElement.classList.add('popup__photo');
    newImgElement.src = element;
    newImgElement.width = IMG_WIDTH;
    newImgElement.height = IMG_HEIGHT;
    newImgElement.alt = IMG_ALT;
    docElement.appendChild(newImgElement);
  });
  return docElement;
};

// Функция для заполнения эдемента с дочерними элементами
const fillComplexElement = (environment, objectKey, classElement, fn) => {
  const popupElement = environment.querySelector(classElement);
  if (objectKey === undefined) {
    popupElement.hidden = true;
  }
  return fn(popupElement, objectKey);
};

const fillDoubleElement = (firstKeyValue, secondKeyValue, templateElement, elementClass) => {
  if (elementClass === '.popup__text--time') {
    templateElement.querySelector(elementClass).textContent = printCheckinCheckout(firstKeyValue, secondKeyValue);
  }
  if (elementClass === '.popup__text--capacity') {
    templateElement.querySelector(elementClass).textContent = printRoomsGuests(firstKeyValue, secondKeyValue);
  }
  if (firstKeyValue === undefined || secondKeyValue === undefined) {
    templateElement.querySelector(elementClass).hidden = true;
  }
};

const fillElement = (keyValue, templateElement, elementClass) => {
  templateElement.querySelector(elementClass).textContent = keyValue;
  if (elementClass === '.popup__type') {
    templateElement.querySelector(elementClass).textContent = getAppartType(keyValue, MAP_FLAT_TYPE);
  }
  if (elementClass === '.popup__text--price') {
    templateElement.querySelector(elementClass).textContent = `${keyValue} ₽/ночь`;
  }
  if (elementClass === '.popup__avatar') {
    templateElement.querySelector(elementClass).src = keyValue;
  }
  if (keyValue === undefined) {
    templateElement.querySelector(elementClass).hidden = true;
  }
};

const createTemplateElement = (object) => {
  const {offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}} = object;
  const newAdElement = similarAddTemplate.cloneNode(true);
  fillElement(title, newAdElement, '.popup__title');
  fillElement(address, newAdElement, '.popup__text--address');
  fillElement(price, newAdElement, '.popup__text--price');
  fillElement(type, newAdElement, '.popup__type');
  fillDoubleElement(rooms, guests, newAdElement, '.popup__text--capacity');
  fillDoubleElement(checkin, checkout, newAdElement, '.popup__text--time');
  fillComplexElement(newAdElement, features, '.popup__features', createFeatures);
  fillElement(description, newAdElement, '.popup__description');
  fillComplexElement(newAdElement, photos, '.popup__photos', createPhotos);
  fillElement(avatar, newAdElement, '.popup__avatar');
  addsFragment.appendChild(newAdElement);
  return newAdElement;
};

export {createTemplateElement, mapCanvas};
