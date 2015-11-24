'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReviewList = (function () {
  function ReviewList() {
    _classCallCheck(this, ReviewList);

    this.reviews = [];
  }

  _createClass(ReviewList, [{
    key: 'add',
    value: function add(review) {
      var invalidReason = review.validate() || (this.reviews.find(function (r) {
        return r.raw.movie === review.raw.movie;
      }) ? ReviewList.MOVIE_ALREADY_EXIST : null);

      if (invalidReason) return invalidReason;

      this.reviews.push(review);
      return null;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var _ref;

      var i = 0;
      var reviews = this.reviews;
      return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
        return this;
      }), _defineProperty(_ref, 'next', function next() {
        return i < reviews.length ? { value: reviews[i++] } : { done: true };
      }), _ref;
    }
  }]);

  return ReviewList;
})();

exports.default = ReviewList;

ReviewList.MOVIE_ALREADY_EXIST = Symbol('already-exist');