const validData = require('./valid-data');
const rateForm = document.getElementById('rateForm');

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const {movie: {value: movie}, rate: {value: rate}} = rateForm;
  const invalidReason = validData({
    movie: movie,
    rate: rate
  });

  const alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case validData.MOVIE_REQUIRED:
        return `Movie required.`;
      case validData.RATE_REQUIRED:
        return `Rate required.`
      case validData.INVALID_RATE:
        return `Invalid rate ${rate}.`;
    }

    return `The movie ${movie} has been rated ${rate}!`;
  }

  alert.style.display = 'block';

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007'))
    new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark'))
    document.body.style.background = 'black';
});
