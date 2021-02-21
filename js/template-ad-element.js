import {getAppartType, printRoomsGuests, printCheckinCheckout, adObject} from './ad-object.js';

const IMG_HEIGHT = 40;
const IMG_WIDTH = 45;
const IMG_ALT = 'Фотография жилья';
const MAP_FLAT_TYPE = {flat: 'Квартира', bungalow: 'Бунгало', house: 'Дом', palace: 'Дворец'};
const mapCanvas = document.querySelector('#map-canvas');
const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
const addsFragment = document.createDocumentFragment();

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


const {offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}} = adObject;

const MAP_CLASS_TYPE = {
  '.popup__title': title,
  '.popup__text--address': address,
  '.popup__text--price': `${price} ₽/ночь`,
  '.popup__type': getAppartType(type, MAP_FLAT_TYPE),
  '.popup__text--capacity': printRoomsGuests(rooms, guests),
  '.popup__text--time': printCheckinCheckout(checkin, checkout),
  '.popup__description': description,
  '.popup__avatar': avatar,
};

// Функция для заполнения эдемента с дочерними элементами
const fillComplexElement = (environment, objectKey, classElement, fn) => {
  const popupElement = environment.querySelector(classElement);
  if (objectKey === undefined) {
    popupElement.hidden = true;
  }
  return fn(popupElement, objectKey);
};

const fillDoubleElement = (firstObjectKey, secondObjectKey, templateElement, elementClass) => {
  templateElement.querySelector(elementClass).textContent = MAP_CLASS_TYPE[elementClass];
  if (firstObjectKey === undefined || secondObjectKey === undefined) {
    templateElement.querySelector(elementClass).hidden = true;
  }
};

const fillElement = (objectKey, templateElement, elementClass) => {
  templateElement.querySelector(elementClass).textContent = MAP_CLASS_TYPE[elementClass];
  if (objectKey === avatar) {
    templateElement.querySelector(elementClass).src = MAP_CLASS_TYPE[elementClass];
  }
  if (objectKey === undefined) {
    templateElement.querySelector(elementClass).hidden = true;
  }
};

const createTemplateElement = () => {
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
