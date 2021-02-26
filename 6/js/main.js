/* global L:readonly */
import {SIMILAR_ADS_COUNT, createAd} from './ad-object.js';
import {adDisabled, DISABLED_ELEMENTS, adForm} from './inactive-state.js';
import {pinAllMarks, getMarkerAdres, mainPinMarker} from './markers.js';
import  {activeStage} from './active-state.js';
import  {tileLayer, addToMap} from './map.js';
// const ad = createAd();

const ADD_TO_MAP_ARR = [tileLayer, mainPinMarker];
const adsArr = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());
const adresForm = adForm.querySelector('#address');

adDisabled(DISABLED_ELEMENTS);

const map = L.map('map-canvas')
  .on('load', () => {
    activeStage(DISABLED_ELEMENTS, adresForm);
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

addToMap(ADD_TO_MAP_ARR, map);
// Добавляем функционал получения адреса метки в поле с адресом
getMarkerAdres(mainPinMarker, adresForm);
// Добавляем метки из массива объявлений на карту
pinAllMarks(adsArr, map);
