/* global L:readonly */

const tileLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);

// Функция добавления объектов к карте
const addToMap = (arrAdditions, map) => {
  arrAdditions.forEach((element) => {
    element.addTo(map);
  });
};

export {tileLayer, addToMap};
