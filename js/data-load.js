'use strict';
(function () {

  window.dataLoad = {};

  var onLoad = function (warlocks) {
    window.dataLoad.warlockList = warlocks;
    window.warlockCustom.updateWarlocks(warlocks);
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoad, onError);

  var upLoad = function () {
    window.data.userDialog.classList.add('hidden');
  };

  var upLoadErr = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = window.data.userDialog.querySelector('.setup-wizard-form');
  var formData = new FormData(form);
  form.addEventListener('submit', function (evt) {
    window.backend.save(formData, upLoad, upLoadErr);
    evt.preventDefault();
  });
})();
