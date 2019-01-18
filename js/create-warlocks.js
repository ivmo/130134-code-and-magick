'use strict';
(function () {

  var renderWarlock = function (warlock) {
    var warlockTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var warlockElement = warlockTemplate.cloneNode(true);

    warlockElement.querySelector('.wizard-eyes').style.fill = warlock.colorEyes;
    warlockElement.querySelector('.wizard-coat').style.fill = warlock.colorCoat;
    warlockElement.querySelector('.setup-similar-label').textContent = warlock.name;

    return warlockElement;
  };


  var putWarlocks = function (data) {
    // var warlocksList = data;
    var similarListElement = window.data.userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    similarListElement.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWarlock(data[i]));
    }
    similarListElement.appendChild(fragment);
  };


  window.createWarlocks = {
    putWarlocks: putWarlocks
  };

  window.data.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
