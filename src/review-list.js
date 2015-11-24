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

  [Symbol.iterator]() {
    let i = 0;
    let reviews = this.reviews;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        return i < reviews.length
          ? {value: reviews[i++]} : {done: true};
      }
    }
  }
}

ReviewList.MOVIE_ALREADY_EXIST = Symbol('already-exist');
