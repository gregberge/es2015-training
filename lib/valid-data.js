'use strict';

var MOVIE_REQUIRED = Symbol('movie-required');
var RATE_REQUIRED = Symbol('rate-required');
var INVALID_RATE = Symbol('invalid-rate');

module.exports = function (values) {
  if (!values.movie) return MOVIE_REQUIRED;

  if (!values.rate) return RATE_REQUIRED;

  var rateNumber = +values.rate;

  if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5) return INVALID_RATE;

  return null;
};

module.exports.MOVIE_REQUIRED = MOVIE_REQUIRED;
module.exports.RATE_REQUIRED = RATE_REQUIRED;
module.exports.INVALID_RATE = INVALID_RATE;
module.exports.RATE_REQUIRED = RATE_REQUIRED;