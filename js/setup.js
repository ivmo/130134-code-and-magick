'use strict';

var ESC = 27;
var ENTER = 13;

var userDialog = document.querySelector('.setup');
var openBtn = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var openIcon = openBtn.querySelector('.setup-open-icon');
var focus = false;


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

var getFeatureValue = function (featuresArr) {
  var randomValue = Math.floor(Math.random() * featuresArr.length);
  return featuresArr[randomValue];
};

var createData = function (name, surname, warlockCoatColor, warlockEyesColor) {
  var warlocks = [];
  for (var i = 0; i < 4; i++) {
    var warlock = {
      name: getFeatureValue(name) + ' ' + getFeatureValue(surname),
      coatColor: getFeatureValue(warlockCoatColor),
      eyesColor: getFeatureValue(warlockEyesColor)
    };
    warlocks.push(warlock);
  }
  return warlocks;
};

var warlocksList = createData(NAMES, SURNAMES, coatColor, eyesColor);

var renderWarlock = function (warlock) {
  var warlockTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var warlockElement = warlockTemplate.cloneNode(true);

  warlockElement.querySelector('.wizard-eyes').style.fill = warlock.eyesColor;
  warlockElement.querySelector('.wizard-coat').style.fill = warlock.coatColor;
  warlockElement.querySelector('.setup-similar-label').textContent = warlock.name;

  return warlockElement;
};

var putWarlocks = function () {
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < warlocksList.length; i++) {
    fragment.appendChild(renderWarlock(warlocksList[i]));
  }
  similarListElement.appendChild(fragment);
};

putWarlocks();

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var inputFocus = function (evt) {
  if (evt.target.classList.contains('setup-user-name')) {
    focus = true;
  }
  return focus;
};

var inputBlur = function (evt) {
  if (evt.target.classList.contains('setup-user-name')) {
    focus = false;
  }
  return focus;
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  userDialog.addEventListener('focus', inputFocus, true);
  userDialog.addEventListener('blur', inputBlur, true);
  userDialog.addEventListener('click', closePopup);
  userDialog.addEventListener('keydown', closePopup);
  document.addEventListener('keydown', closePopup);
};


var closePopup = function (evt) {
  if (evt.target.classList.contains('setup-close') || (evt.keyCode === ESC && focus === false) || (evt.target.classList.contains('setup-close') && evt.keyCode === ENTER)) {
    userDialog.classList.add('hidden');
    userDialog.removeEventListener('focus', inputFocus, true);
    userDialog.removeEventListener('blur', inputBlur, true);
    setupClose.removeEventListener('click', closePopup);
    document.removeEventListener('keydown', closePopup);
  }
};

openBtn.addEventListener('click', function () {
  openPopup();
});

openIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    openPopup();
  }
});


var warlock = userDialog.querySelector('.setup-wizard');
var coat = warlock.querySelector('.wizard-coat');
var eyes = warlock.querySelector('.wizard-eyes');
var fireball = userDialog.querySelector('.setup-fireball-wrap');
var inputCoatColor = userDialog.querySelector('input[name="coat-color"]');
var inputEyesColor = userDialog.querySelector('input[name="eyes-color"]');
var inputFireColor = userDialog.querySelector('input[name="fireball-color"]');

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
    coat.style.fill = getNextValue(coatColor, coat, 'fill');
    inputCoatColor.value = coat.style.fill;
  }
};

var changeEyesColor = function (evt) {
  if (evt.target.classList.contains('wizard-eyes')) {
    eyes.style.fill = getNextValue(eyesColor, eyes, 'fill');
    inputEyesColor.value = eyes.style.fill;
  }
};

var changeFireColor = function () {
  fireball.style.background = getNextValue(fireballColor, fireball, 'background');
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
