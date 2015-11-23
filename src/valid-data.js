const MOVIE_REQUIRED = Symbol('movie-required');
const RATE_REQUIRED = Symbol('rate-required');
const INVALID_RATE = Symbol('invalid-rate');
const INVALID_BUZZ = Symbol('invalid-feeling');

module.exports = function ({movie = null, rate = null, buzzWords = []}) {
  if (!movie)
    return MOVIE_REQUIRED;

  if (!rate)
    return RATE_REQUIRED;

  const rateNumber = +rate;

  if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5)
    return INVALID_RATE;

  if (buzzWords.length && !validateBuzzWords(...buzzWords))
    return INVALID_BUZZ;

  return null;
};

const VALID_BUZZ_WORDS = ['amazing', 'hilarious', 'sad', 'bad'];

function validateBuzzWords(...words) {
  return words.every(isValidBuzzWord);
}

function isValidBuzzWord(buzzWord) {
  return VALID_BUZZ_WORDS.some(function (word) {
    return word === buzzWord;
  });
}



module.exports.MOVIE_REQUIRED = MOVIE_REQUIRED;
module.exports.RATE_REQUIRED = RATE_REQUIRED;
module.exports.INVALID_RATE = INVALID_RATE;
module.exports.INVALID_BUZZ = INVALID_BUZZ;
