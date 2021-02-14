import {createAd, SIMILAR_ADS_COUNT} from './gen-arr.js';

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

similarAds;
