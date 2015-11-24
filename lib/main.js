'use strict';

var _movieReview = require('./movie-review');

var _movieReview2 = _interopRequireDefault(_movieReview);

var _domUtil = require('./dom-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var _rateForm = rateForm;
  var movie = _rateForm.movie.value;
  var rate = _rateForm.rate.value;
  var buzz = _rateForm.buzz.value;

  var review = new _movieReview2.default({ movie: movie, rate: rate, buzz: buzz });
  var invalidReason = review.validate();

  var alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case _movieReview2.default.MOVIE_REQUIRED:
        return 'Movie required.';
      case _movieReview2.default.RATE_REQUIRED:
        return 'Rate required.';
      case _movieReview2.default.INVALID_RATE:
        return 'Invalid rate ' + rate + '.';
      case _movieReview2.default.INVALID_BUZZ:
        return 'Invalid buzz words ' + buzz + '.';
      case null:
        return 'The movie ' + movie + ' has been rated ' + rate + '!';
      default:
        return 'Unknown error';
    }
  }

  (0, _domUtil.setElementStyle)(alert, { display: 'block' });

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007')) new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark')) (0, _domUtil.setElementStyle)(body, { background: 'black' });
});