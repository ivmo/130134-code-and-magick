'use strict';
(function () {
  var openBtn = document.querySelector('.setup-open');
  var openIcon = openBtn.querySelector('.setup-open-icon');
  var focusState = false;


  var inputFocus = function (evt) {
    if (evt.target.classList.contains('setup-user-name')) {
      focusState = true;
    }
    return focusState;
  };

  var inputBlur = function (evt) {
    if (evt.target.classList.contains('setup-user-name')) {
      focusState = false;
    }
    return focusState;
  };

  var openPopup = function () {
    window.data.userDialog.classList.remove('hidden');
    window.data.userDialog.addEventListener('focus', inputFocus, true);
    window.data.userDialog.addEventListener('blur', inputBlur, true);
    window.data.userDialog.addEventListener('click', closePopup);
    window.data.userDialog.addEventListener('keydown', closePopupKeydown);
    document.addEventListener('keydown', closePopupKeydown);
  };

  var setupDialogElement = document.querySelector('.setup');

  var closePopup = function (evt) {
    if (evt.target.classList.contains('setup-close')) {
      window.data.userDialog.classList.add('hidden');
      window.data.userDialog.removeEventListener('focus', inputFocus, true);
      window.data.userDialog.removeEventListener('blur', inputBlur, true);
      window.data.userDialog.removeEventListener('click', closePopup);
      window.data.userDialog.removeEventListener('keydown', closePopupKeydown);
      document.removeEventListener('keydown', closePopupKeydown);
      setupDialogElement.style.top = '';
      setupDialogElement.style.left = '';
    }
  };

  var closePopupKeydown = function (evt) {
    if ((evt.keyCode === ESC && focusState === false) || (evt.target.classList.contains('setup-close') && evt.keyCode === ENTER)) {
      window.data.userDialog.classList.add('hidden');
      window.data.userDialog.removeEventListener('focus', inputFocus, true);
      window.data.userDialog.removeEventListener('blur', inputBlur, true);
      window.data.userDialog.removeEventListener('click', closePopup);
      window.data.userDialog.removeEventListener('keydown', closePopupKeydown);
      document.removeEventListener('keydown', closePopupKeydown);
      setupDialogElement.style.top = '';
      setupDialogElement.style.left = '';
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
})();
