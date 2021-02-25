import {getMapType, createMap} from './map-class.js';

const IMG_HEIGHT = 40;
const IMG_WIDTH = 45;
const IMG_ALT = 'Фотография жилья';
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

// Функция для заполнения эдемента с дочерними элементами
const fillComplexElement = (environment, classElement, fn, map) => {
  const keyValue = getMapType(map, classElement);
  const popupElement = environment.querySelector(classElement);
  if (keyValue === undefined) {
    popupElement.hidden = true;
  }
  return fn(popupElement, keyValue);
};

const fillElement = (templateElement, classElement, map) => {
  const keyValue = getMapType(map, classElement);
  templateElement.querySelector(classElement).textContent = keyValue;

  if (classElement === '.popup__avatar') {
    templateElement.querySelector(classElement).src = keyValue;
  }

  if (keyValue === undefined) {
    templateElement.querySelector(classElement).hidden = true;
  }
};

const createTemplateElement = (object) => {
  const MAP_CLASS = createMap(object);
  const newAdElement = similarAddTemplate.cloneNode(true);
  fillElement(newAdElement, '.popup__title', MAP_CLASS);
  fillElement(newAdElement, '.popup__text--address', MAP_CLASS);
  fillElement(newAdElement, '.popup__text--price', MAP_CLASS);
  fillElement(newAdElement, '.popup__type', MAP_CLASS);
  fillElement(newAdElement, '.popup__text--capacity', MAP_CLASS);
  fillElement(newAdElement, '.popup__text--time', MAP_CLASS);
  fillComplexElement(newAdElement, '.popup__features', createFeatures, MAP_CLASS);
  fillElement(newAdElement, '.popup__description', MAP_CLASS);
  fillComplexElement(newAdElement, '.popup__photos', createPhotos, MAP_CLASS);
  fillElement(newAdElement, '.popup__avatar', MAP_CLASS);
  addsFragment.appendChild(newAdElement);
  return newAdElement;
};

export {createTemplateElement};
