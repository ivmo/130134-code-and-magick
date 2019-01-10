'use strict';
(function () {
  var load = function (onLoad, onError) {
    var url = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };



  var save = function (data, onLoad, onError) {

  };

  window.backend = {
    load: load,
    save: save
  }
})();
