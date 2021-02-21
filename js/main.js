import {SIMILAR_ADS_COUNT} from './ad-object.js';
import {createTemplateElement, mapCanvas} from './template-ad-element.js'

// Создаем и заполняем массив объектов
const createAdsArr = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createTemplateElement());

mapCanvas.appendChild(createAdsArr[0]);
