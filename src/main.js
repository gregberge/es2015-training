import ReviewList from './review-list';
import MovieReview from './movie-review';
import {setElementStyle} from './dom-util';

<<<<<<< HEAD
<<<<<<< HEAD
const rateForm = document.getElementById('rateForm');
=======
const reviews = [];
>>>>>>> 3488484... Exercise 25 : add movie list, has-error class
=======
const reviews = new ReviewList();
>>>>>>> c0c4a31... Exercise 27: review list iterable

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const {
    movie: {value: movie},
    rate: {value: rate},
    buzz: {value: buzz}
  } = rateForm;

  const review = new MovieReview({movie, rate, buzz});
  const invalidReason = reviews.add(review);

  const alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case ReviewList.MOVIE_ALREADY_EXIST:
        return 'Movie already exist';
      case MovieReview.MOVIE_REQUIRED:
        return `Movie required.`;
      case MovieReview.RATE_REQUIRED:
        return `Rate required.`
      case MovieReview.INVALID_RATE:
        return `Invalid rate ${rate}.`;
      case MovieReview.INVALID_BUZZ:
        return `Invalid buzz words ${buzz}.`;
      case null:
        return `The movie ${movie} has been rated ${rate}!`;
      default:
        return 'Unknown error';
    }
  }

  Array.from(document.getElementsByClassName('form-group'))
    .forEach(formGroup =>
      formGroup.classList[invalidReason ? 'add' : 'remove']('has-error')
    );

  if (!invalidReason) {
    for (let review of reviews)
      console.log(review + '');
  }

  setElementStyle(alert, {display: 'block'});

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007'))
    new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark'))
    setElementStyle(document.body, {background: 'black'});
});
