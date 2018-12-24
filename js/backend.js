'use strict';
(function () {
  var script = document.createElement('script');
  script.src = 'https://js.dump.academy/code-and-magick/data?callback=getData';


  var getData = function (data) {
    console.log('123test');
    var warlocks = [];
    for (var i = 0; i < 4; i++) {
      var warlock = getFeatureValue(data);
      warlocks.push(warlock);
    }
    return warlocks;
  };

  document.body.appendChild(script);

  var onError = function (errMessage) {

  };

  var load = function (onLoad, onError) {
    var warlocks = [];
    for (var i = 0; i < 4; i++) {
      var warlock = getFeatureValue(onLoad);
      warlocks.push(warlock);
    }
    return warlocks;
  };

  var save = function (data, onLoad, onError) {

  };



  window.backend = {
    load: load,
    save: save
  };

})();
