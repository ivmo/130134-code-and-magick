'use strict';
(function () {
  var ESC = 27;
  var ENTER = 13;
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var coatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var userDialog = document.querySelector('.setup');

  // var getFeatureValue = function (featuresArr) {
  //   var randomValue = Math.floor(Math.random() * featuresArr.length);
  //   return featuresArr[randomValue];
  // };
  //
  // var createData = function (name, surname, warlockCoatColor, warlockEyesColor) {
  //   var warlocks = [];
  //   for (var i = 0; i < 4; i++) {
  //     var warlock = {
  //       name: getFeatureValue(name) + ' ' + getFeatureValue(surname),
  //       coatColor: getFeatureValue(warlockCoatColor),
  //       eyesColor: getFeatureValue(warlockEyesColor)
  //     };
  //     warlocks.push(warlock);
  //   }
  //   return warlocks;
  // };

  // var warlocksList = createData(NAMES, SURNAMES, coatColor, eyesColor);



    // var warlocksList = window.backend.load(onLoad, onError);

    // console.log(warlocksList);

    var onLoad = function (warlocks) {
      window.createWarlocks.putWarlocks(warlocks);
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
      userDialog.classList.add('hidden');
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

    var form = userDialog.querySelector('.setup-wizard-form');
    var formData = new FormData(form);
    form.addEventListener('submit', function (evt) {
      window.backend.save(formData, upLoad, upLoadErr);
      evt.preventDefault();
    });

  window.data = {
    ESC: ESC,
    ENTER: ENTER,
    coatColor: coatColor,
    eyesColor: eyesColor,
    fireballColor: fireballColor,
    userDialog: userDialog
  };
})();
