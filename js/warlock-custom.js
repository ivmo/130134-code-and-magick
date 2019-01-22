'use strict';
(function () {
  var warlockInner = window.data.userDialog.querySelector('.setup-player');
  var warlock = window.data.userDialog.querySelector('.setup-wizard');
  var coat = warlock.querySelector('.wizard-coat');
  var eyes = warlock.querySelector('.wizard-eyes');
  var fireball = window.data.userDialog.querySelector('.setup-fireball-wrap');
  var inputCoatColor = window.data.userDialog.querySelector('input[name="coat-color"]');
  var inputEyesColor = window.data.userDialog.querySelector('input[name="eyes-color"]');
  var inputFireColor = window.data.userDialog.querySelector('input[name="fireball-color"]');

  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWarlocks = function (data) {
    window.createWarlocks.putWarlocks(data.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));

  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };


  var changeCoatColor = function (data) {
    var newColor = getRandomElement(window.data.coatColor);
    coat.style.fill = newColor;
    inputCoatColor.value = newColor;
    coatColor = newColor;
    var updateWarlocksRes = updateWarlocks(data);
    window.debounce(updateWarlocksRes);

  };

  var changeEyesColor = function (data) {
    var newColor = getRandomElement(window.data.eyesColor);
    eyes.style.fill = newColor;
    inputEyesColor.value = newColor;
    eyesColor = newColor;
    var updateWarlocksRes = updateWarlocks(data);
    window.debounce(updateWarlocksRes);
  };

  var changeFireColor = function () {
    var newColor = getRandomElement(window.data.fireballColor);
    fireball.style.background = newColor;
    inputFireColor.value = newColor;
  };

  var warlockClickHandler = function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      changeCoatColor(window.dataLoad.warlockList);
    } else if (evt.target.classList.contains('wizard-eyes')) {
      changeEyesColor(window.dataLoad.warlockList);
    } else if (evt.target.classList.contains('setup-fireball')) {
      changeFireColor(window.dataLoad.warlockList);
    }
  };

  warlockInner.addEventListener('click', warlockClickHandler);


  window.warlockCustom = {
    updateWarlocks: updateWarlocks
  };

})();
