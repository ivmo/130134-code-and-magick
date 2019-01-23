'use strict';
(function () {
  var ESC = 27;
  var ENTER = 13;

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


  window.data = {
    ESC: ESC,
    ENTER: ENTER,
    coatColor: coatColor,
    eyesColor: eyesColor,
    fireballColor: fireballColor,
    userDialog: userDialog
  };
})();
