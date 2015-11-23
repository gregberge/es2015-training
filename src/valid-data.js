const MOVIE_REQUIRED = Symbol('movie-required');
const RATE_REQUIRED = Symbol('rate-required');
const INVALID_RATE = Symbol('invalid-rate');

module.exports = function ({movie = null, rate = null}) {
  if (!movie)
    return MOVIE_REQUIRED;

  if (!rate)
    return RATE_REQUIRED;

  const rateNumber = +rate;

  if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5)
    return INVALID_RATE;

  return null;
};

module.exports.MOVIE_REQUIRED = MOVIE_REQUIRED;
module.exports.RATE_REQUIRED = RATE_REQUIRED;
module.exports.INVALID_RATE = INVALID_RATE;
module.exports.RATE_REQUIRED = RATE_REQUIRED;
