'use strict';
(function () {
  var warlock = window.data.userDialog.querySelector('.setup-wizard');
  var coat = warlock.querySelector('.wizard-coat');
  var eyes = warlock.querySelector('.wizard-eyes');
  var fireball = window.data.userDialog.querySelector('.setup-fireball-wrap');
  var inputCoatColor = window.data.userDialog.querySelector('input[name="coat-color"]');
  var inputEyesColor = window.data.userDialog.querySelector('input[name="eyes-color"]');
  var inputFireColor = window.data.userDialog.querySelector('input[name="fireball-color"]');

  var getNextValue = function (featuresArr, feature, styleColor) {
    var currColor = feature.style[styleColor];
    var nextValue = 1;
    featuresArr.forEach(function (item, i) {
      if (item === currColor) {
        nextValue = i + 1;
      }
    });
    if (nextValue >= featuresArr.length) {
      nextValue = 0;
    }
    return featuresArr[nextValue];
  };

  var coatColor;
  var eyesColor;
  var fireballColor;

  var updateWarlocks = function () {

    window.createWarlocks.putWarlocks(window.data.warlockList);
  }

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };


  var changeCoatColor = function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      var newColor = getRandomElement(window.data.coatColor);
      coat.style.fill = newColor;
      inputCoatColor.value = newColor;
      coatColor = newColor;
      updateWarlocks();
    }
  };

  var changeEyesColor = function (evt) {
    if (evt.target.classList.contains('wizard-eyes')) {
      var newColor = getRandomElement(window.data.eyesColor);
      eyes.style.fill = newColor;
      inputEyesColor.value = newColor;
      eyesColor = newColor;
      updateWarlocks();
    }
  };

  var changeFireColor = function () {
    var newColor = getRandomElement(window.data.fireballColor);
    fireball.style.background = newColor;
    inputFireColor.value = newColor;
    fireballColor = newColor;
    updateWarlocks();
  };

  var warlockClickHandler = function (wizard) {
    wizard.addEventListener('click', changeCoatColor);
    wizard.addEventListener('click', changeEyesColor);
  };

  var fireballClickHandler = function (fire) {
    fire.addEventListener('click', changeFireColor);
  };

  warlockClickHandler(warlock);

  fireballClickHandler(fireball);

  window.warlockCustom = {
    updateWarlocks: updateWarlocks
  }

})();
