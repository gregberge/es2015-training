export const MOVIE_REQUIRED = Symbol('movie-required');
export const RATE_REQUIRED = Symbol('rate-required');
export const INVALID_RATE = Symbol('invalid-rate');
export const INVALID_BUZZ = Symbol('invalid-feeling');

const VALID_BUZZ_WORDS = ['amazing', 'hilarious', 'sad', 'bad'];

const validateBuzzWords = (...words) =>
  words.every(isValidBuzzWord);

const isValidBuzzWord = word =>
  VALID_BUZZ_WORDS.some(w => w === word);

export default function ({movie = null, rate = null, buzzWords = []}) {
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
}
