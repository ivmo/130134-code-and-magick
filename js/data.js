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

  var onLoad = function (warlocks) {
    console.log(warlocks);
    return warlocks;
  }

  var onError = function () {

  };

    var warlocksList = window.backend.load(onLoad, onError);

  window.data = {
    ESC: ESC,
    ENTER: ENTER,
    coatColor: coatColor,
    eyesColor: eyesColor,
    fireballColor: fireballColor,
    userDialog: userDialog,
    warlocksList: warlocksList
  };
})();
