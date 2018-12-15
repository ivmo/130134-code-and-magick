'use strict';

(function () {
  var artifactsShop = document.querySelector('.setup-artifacts-shop');
  var artifactsBag = document.querySelector('.setup-artifacts');
  var artifactItem;
  artifactsShop.addEventListener('drag', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactItem = evt.target;
    }
  });
  artifactsBag.addEventListener('drop', function (evt) {
    evt.target.appendChild(artifactItem);
  });
  artifactsBag.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });
  artifactsBag.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.background = '#30a8ee';
  });
  artifactsBag.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.background = '';
  });

})();
