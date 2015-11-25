'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReviewList = (function () {
  function ReviewList() {
    _classCallCheck(this, ReviewList);

    this.reviews = [];
    this.buzzWords = new Set();
  }

  _createClass(ReviewList, [{
    key: 'add',
    value: function add(review) {
      var invalidReason = review.validate() || (this.reviews.find(function (r) {
        return r.raw.movie === review.raw.movie;
      }) ? ReviewList.MOVIE_ALREADY_EXIST : null);

      if (invalidReason) return invalidReason;

      this.reviews.push(review);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = review.getBuzzWords()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var word = _step.value;

          this.buzzWords.add(word);
        } // Same
        // review.getBuzzWords()
        // .forEach(word => this.buzzWords.add(word))
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

      return null;
    }
  }, {
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.reviews, 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, value, this);
    })
  }]);

  return ReviewList;
})();

exports.default = ReviewList;

ReviewList.MOVIE_ALREADY_EXIST = Symbol('already-exist');