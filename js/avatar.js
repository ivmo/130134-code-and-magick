'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  var dropArea = document.querySelector('.upload');
  var file;

  var imgUpload = function (data) {
    var fileName = data.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(data);
    }
  };

  dropArea.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    dropArea.classList.add('highlight');
  });
  dropArea.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    dropArea.classList.add('highlight');
  });
  dropArea.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    dropArea.classList.remove('highlight');
  });
  dropArea.addEventListener('drop', function (evt) {
    evt.preventDefault();
    dropArea.classList.remove('highlight');

    var dt = evt.dataTransfer;
    file = dt.files[0];

    imgUpload(file);

  });

  fileChooser.addEventListener('change', function () {
    file = fileChooser.files[0];
    imgUpload(file);
  });

})();
