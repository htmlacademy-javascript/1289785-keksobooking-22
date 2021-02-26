/* global L:readonly */
import  {activeStateForm} from './active-state-form.js';
import {DISABLED_ELEMENTS, adForm} from './inactive-state.js';
import {SIMILAR_ADS_COUNT, createAd} from './ad-object.js';
import {tileLayer} from './map-layer.js';

const adresForm = adForm.querySelector('#address');
const ADD_TO_MAP_ARR = [tileLayer, mainPinMarker];
import {pinAllMarks, getMarkerAdres, mainPinMarker} from './markers.js';
const adsArr = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

// Функция добавления объектов к карте
const addToMap = (arr, map) => {
  arr.forEach((element) => {
    element.addTo(map);
  });
};

const activeState = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activeStateForm(DISABLED_ELEMENTS, adresForm);
    })
    .setView({
      lat: 35.68950,
      lng: 139.69171,
    }, 10);
  addToMap(ADD_TO_MAP_ARR, map);
  getMarkerAdres(mainPinMarker, adresForm);
  pinAllMarks(adsArr, map);
};

export {activeState};
