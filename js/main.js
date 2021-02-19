import {adObject, SIMILAR_ADS_COUNT} from './gen-object.js';
import {createTemplateElement, mapCanvas} from './gen-object-element.js'

// Создаем и заполняем массив объектов
const createAdsArr = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createTemplateElement(adObject));

mapCanvas.appendChild(createAdsArr[0]);
