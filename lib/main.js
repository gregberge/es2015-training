'use strict';

var _reviewList = require('./review-list');

var _reviewList2 = _interopRequireDefault(_reviewList);

var _movieReview = require('./movie-review');

var _movieReview2 = _interopRequireDefault(_movieReview);

var _domUtil = require('./dom-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rateForm = document.getElementById('rateForm');
var reviews = new _reviewList2.default();

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var movie = rateForm.movie.value;
  var rate = rateForm.rate.value;
  var buzz = rateForm.buzz.value;

  var review = new _movieReview2.default({ movie: movie, rate: rate, buzz: buzz });
  var invalidReason = reviews.add(review);

  var alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case _reviewList2.default.MOVIE_ALREADY_EXIST:
        return 'Movie already exist';
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

  Array.from(document.getElementsByClassName('form-group')).forEach(function (formGroup) {
    return formGroup.classList[invalidReason ? 'add' : 'remove']('has-error');
  });

  if (!invalidReason) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = reviews[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _review = _step.value;

        console.log(_review + '');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  (0, _domUtil.setElementStyle)(alert, { display: 'block' });

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007')) new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark')) (0, _domUtil.setElementStyle)(document.body, { background: 'black' });
});

// co example

function co(genFunc) {
  var genObj = genFunc();
  var run = function run(previousValue) {
    var _genObj$next = genObj.next(previousValue);

    var value = _genObj$next.value;
    var done = _genObj$next.done;

    if (!done) run(value);
  };

  run();
}

function sayHello() {
  return 'hello world!';
}

co(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = console;
          _context.next = 3;
          return sayHello();

        case 3:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));