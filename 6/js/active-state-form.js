// Функция для отмены режимов "неактивно";
const removeDisabled = (arr) => {
  arr.forEach((arrElement) => {
    arrElement.classList.remove('ad-form--disabled');
    const formElements = arrElement.querySelectorAll('fieldset, select')
    formElements.forEach((element) => {
      element.disabled = false;
    });
  });
};

// Функция для запрета ручного редактирования поля адрес;
const readOnlyStage = (element) => {
  element.readOnly = true;
};

// Функция активного режима
const activeStateForm = (arr, readOnlyElement) => {
  removeDisabled(arr);
  readOnlyStage(readOnlyElement);
};

export {activeStateForm};
