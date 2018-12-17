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


  var changeCoatColor = function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      coat.style.fill = getNextValue(window.data.coatColor, coat, 'fill');
      inputCoatColor.value = coat.style.fill;
    }
  };

  var changeEyesColor = function (evt) {
    if (evt.target.classList.contains('wizard-eyes')) {
      eyes.style.fill = getNextValue(window.data.eyesColor, eyes, 'fill');
      inputEyesColor.value = eyes.style.fill;
    }
  };

  var changeFireColor = function () {
    fireball.style.background = getNextValue(window.data.fireballColor, fireball, 'background');
    inputFireColor.value = fireball.style.background;
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

})();
