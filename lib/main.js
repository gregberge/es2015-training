'use strict';

var _validData = require('./valid-data');

var _validData2 = _interopRequireDefault(_validData);

var _domUtil = require('./dom-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var _rateForm = rateForm;
  var movie = _rateForm.movie.value;
  var rate = _rateForm.rate.value;
  var buzz = _rateForm.buzz.value;

  var buzzWords = buzz.split(',').map(function (word) {
    return word.trim().toLowerCase();
  }).filter(function (word) {
    return word;
  });

  var invalidReason = (0, _validData2.default)({
    movie: movie,
    rate: rate,
    buzzWords: buzzWords
  });

  var alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case _validData.MOVIE_REQUIRED:
        return 'Movie required.';
      case _validData.RATE_REQUIRED:
        return 'Rate required.';
      case _validData.INVALID_RATE:
        return 'Invalid rate ' + rate + '.';
      case _validData.INVALID_BUZZ:
        return 'Invalid buzz words ' + buzzWords.join(', ');
    }

    return 'The movie ' + movie + ' has been rated ' + rate + '!';
  }

  (0, _domUtil.setElementStyle)(alert, { display: 'block' });

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007')) new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark')) (0, _domUtil.setElementStyle)(body, { background: 'black' });
});