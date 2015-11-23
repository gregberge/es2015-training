import validData,
  {MOVIE_REQUIRED, RATE_REQUIRED, INVALID_RATE, INVALID_BUZZ} from './valid-data';
import {setElementStyle} from './dom-util';

const rateForm = document.getElementById('rateForm');

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const {
    movie: {value: movie},
    rate: {value: rate},
    buzz: {value: buzz}
  } = rateForm;

  const buzzWords = buzz
    .split(',')
    .map(word => word.trim().toLowerCase())
    .filter(word => word);

  const invalidReason = validData({
    movie,
    rate,
    buzzWords
  });

  const alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case MOVIE_REQUIRED:
        return `Movie required.`;
      case RATE_REQUIRED:
        return `Rate required.`
      case INVALID_RATE:
        return `Invalid rate ${rate}.`;
      case INVALID_BUZZ:
        return `Invalid buzz words ${buzzWords.join(', ')}`;
    }

    return `The movie ${movie} has been rated ${rate}!`;
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
