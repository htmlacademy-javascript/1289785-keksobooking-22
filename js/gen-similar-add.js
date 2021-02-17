import {createAdds, getAppartType, printRoomsGuests, printCheckinCheckout} from './gen-arr.js'
import {clearHTMLCollection} from './util';

const IMG_HEIGHT = 40;
const IMG_WIDTH = 45;
const IMG_ALT = 'Фотография жилья';

const similarAdds = createAdds();

const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
const addsFragment = document.createDocumentFragment();

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

const createPhotos = (docElement, arr) => {
  clearHTMLCollection(docElement);
  arr.forEach((element) => {
    const newElement = document.createElement('img');
    newElement.classList.add('popup__photo');
    newElement.src = element;
    newElement.width = IMG_WIDTH;
    newElement.height = IMG_HEIGHT;
    newElement.alt = IMG_ALT;
    docElement.appendChild(newElement);
  });
  return docElement;
};

const createAddFragment = (addArrs) => {
  addArrs.forEach((add) => {
    const addElement = similarAddTemplate.cloneNode(true);
    addElement.querySelector('.popup__title').textContent = add.offer.title;
    addElement.querySelector('.popup__text--address').textContent = add.offer.address;
    addElement.querySelector('.popup__text--price').textContent = `${add.offer.address} ₽/ночь`;
    addElement.querySelector('.popup__type').textContent = getAppartType(add.offer.type);
    addElement.querySelector('.popup__text--capacity').textContent = printRoomsGuests(add.offer.rooms, add.offer.guests);
    addElement.querySelector('.popup__text--time').textContent = printCheckinCheckout(add.offer.checkin, add.offer.checkout);
    const feature = addElement.querySelector('.popup__features').appendChild;
    feature.appendChild = createFeatures(feature, add.offer.features);
    addElement.querySelector('.popup__description').textContent = add.offer.description;
    const photos = document.querySelector('.popup__photos');
    photos.appendChild = createPhotos(photos, add.offer.photos);
    addElement.querySelector('.popup__avatar').src = add.author.avatar;
    addsFragment.appendChild(addElement);
  });
}

export {similarAdds, createAddFragment};
