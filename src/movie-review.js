import Review from './review';

export default class MovieReview extends Review {
  /**
   * Validate the review.
   *
   * @returns {Symbol}
   */
  validate() {
    const invalidReason = super.validate();

    if (invalidReason)
      return invalidReason;

    if (!this.raw.movie)
      return MovieReview.MOVIE_REQUIRED;

    if (!isValidBuzz(this.raw.buzz))
      return MovieReview.INVALID_BUZZ;

    return null;
  }

  toString() {
    return `Movie ${this.raw.movie}, rated ${this.raw.rate}, buzz ${this.raw.buzz}`;
  }
}

MovieReview.MOVIE_REQUIRED = Symbol('movie-required');
MovieReview.INVALID_BUZZ = Symbol('invalid-feeling');

/**
 * Valid buzz words.
 *
 * @type {string[]}
 */
const VALID_BUZZ_WORDS = ['amazing', 'hilarious', 'sad', 'bad'];

/**
 * Valid a buzz field.
 *
 * @param {string} buzz
 * @returns {boolean}
 */
function isValidBuzz(buzz) {
  return buzz
    .split(',')
    .map(word => word.trim().toLowerCase())
    .filter(word => word)
    .every(word => VALID_BUZZ_WORDS.some(w => w === word));
}
