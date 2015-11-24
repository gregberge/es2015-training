export default class ReviewList {
  constructor() {
    this.reviews = [];
  }

  add(review) {
    const invalidReason = review.validate()
      || (this.reviews.find(r => r.raw.movie === review.raw.movie)
        ? ReviewList.MOVIE_ALREADY_EXIST : null);

    if (invalidReason)
      return invalidReason;

    this.reviews.push(review);
    return null;
  }

  * [Symbol.iterator]() {
    yield* this.reviews;
  }
}

ReviewList.MOVIE_ALREADY_EXIST = Symbol('already-exist');
