'use strict';
(function () {

  var renderWarlock = function (warlock) {
    var warlockTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var warlockElement = warlockTemplate.cloneNode(true);

    warlockElement.querySelector('.wizard-eyes').style.fill = warlock.eyesColor;
    warlockElement.querySelector('.wizard-coat').style.fill = warlock.coatColor;
    warlockElement.querySelector('.setup-similar-label').textContent = warlock.name;

    return warlockElement;
  };

  var putWarlocks = function (data) {
    var similarListElement = window.data.userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(renderWarlock(data[i]));
    }
    similarListElement.appendChild(fragment);
  };


  window.createWarlocks = {
    putWarlocks: putWarlocks
  };

  window.data.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
