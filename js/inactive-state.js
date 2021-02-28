const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const DISABLED_ELEMENTS = [adForm, mapFilter];

// Функция неактивного режима
const adDisabled = (disabledElements) => {
  disabledElements.forEach((arrElement) => {
    arrElement.classList.add('ad-form--disabled');
    const formElements = arrElement.querySelectorAll('fieldset, select')
    formElements.forEach((element) => {
      element.disabled = true;
    });
  });
};

export {adDisabled, DISABLED_ELEMENTS, adForm, mapFilter};
