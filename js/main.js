import {SIMILAR_ADS_COUNT, createAd} from './ad-object.js';
import {createTemplateElement, mapCanvas} from './template-ad-element.js'

const adObject = createAd();

// Создаем и заполняем массив объектов
const createAdsArr = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createTemplateElement(adObject));

mapCanvas.appendChild(createAdsArr[0]);
