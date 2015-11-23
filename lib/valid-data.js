'use strict';

var MOVIE_REQUIRED = Symbol('movie-required');
var RATE_REQUIRED = Symbol('rate-required');
var INVALID_RATE = Symbol('invalid-rate');

module.exports = function (_ref) {
  var _ref$movie = _ref.movie;
  var movie = _ref$movie === undefined ? null : _ref$movie;
  var _ref$rate = _ref.rate;
  var rate = _ref$rate === undefined ? null : _ref$rate;

  if (!movie) return MOVIE_REQUIRED;

  if (!rate) return RATE_REQUIRED;

  var rateNumber = +rate;

  if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5) return INVALID_RATE;

  return null;
};

module.exports.MOVIE_REQUIRED = MOVIE_REQUIRED;
module.exports.RATE_REQUIRED = RATE_REQUIRED;
module.exports.INVALID_RATE = INVALID_RATE;
module.exports.RATE_REQUIRED = RATE_REQUIRED;