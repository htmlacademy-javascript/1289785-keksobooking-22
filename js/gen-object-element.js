import {getAppartType, printRoomsGuests, printCheckinCheckout} from './gen-object.js';

const IMG_HEIGHT = 40;
const IMG_WIDTH = 45;
const IMG_ALT = 'Фотография жилья';
const mapCanvas = document.querySelector('#map-canvas');

// Находим шаблон
const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
// Создаем коробочку для шаблона
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

// Скопируем шаблон и заполним его значениями объекта adObject
const createTemplateElement = (object) => {
  // Клонируем шаблон
  const newAdElement = similarAddTemplate.cloneNode(true);
  // В каждом объекте меняем то, что нам нужно
  newAdElement.querySelector('.popup__title').textContent = object.offer.title;
  newAdElement.querySelector('.popup__text--address').textContent = object.offer.address;
  newAdElement.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
  newAdElement.querySelector('.popup__type').textContent = getAppartType(object.offer.type);
  newAdElement.querySelector('.popup__text--capacity').textContent = printRoomsGuests(object.offer.rooms, object.offer.guests);
  newAdElement.querySelector('.popup__text--time').textContent = printCheckinCheckout(object.offer.checkin, object.offer.checkout);
  const popupFeatures = newAdElement.querySelector('.popup__features');
  createFeatures(popupFeatures, object.offer.features);
  newAdElement.querySelector('.popup__description').textContent = object.offer.description;
  const popupPhotos = newAdElement.querySelector('.popup__photos');
  createPhotos(popupPhotos, object.offer.photos);
  newAdElement.querySelector('.popup__avatar').src = object.author.avatar;
  // Складываем шаблон в коробочку addsFragment
  addsFragment.appendChild(newAdElement);
  return newAdElement;
};

export {createTemplateElement, mapCanvas};
//todo: Меня смущяет громоздкость функций createPhotos и createFeatures, кажется, что можно как-то все это сильно прозще организовать и вообще через одну
//todo: функцию, но уже не успеваю
