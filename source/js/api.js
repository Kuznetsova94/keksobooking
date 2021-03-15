// Модуль описывает взаиможействие с сервером

const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      onFail('Не удалось получить данные с сервера. Попробуйте ещё раз');
    })
    .then((advertisements) => {
      onSuccess(advertisements);
    })
    .catch(() => {
      onFail('Не удалось получить данные с сервера. Попробуйте ещё раз');
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    } )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      onFail();
    })
    .catch(() => {
      onFail();
    });
}

export {
  getData,
  sendData
}
