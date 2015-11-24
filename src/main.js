import MovieReview from './movie-review';
import {setElementStyle} from './dom-util';

const rateForm = document.getElementById('rateForm');

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const {
    movie: {value: movie},
    rate: {value: rate},
    buzz: {value: buzz}
  } = rateForm;

  const review = new MovieReview({movie, rate, buzz});
  const invalidReason = review.validate();

  const alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
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

  setElementStyle(alert, {display: 'block'});

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007'))
    new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark'))
    setElementStyle(document.body, {background: 'black'});
});
