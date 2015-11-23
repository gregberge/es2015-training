'use strict';

var validData = require('./valid-data');
var rateForm = document.getElementById('rateForm');
var setElementStyle = require('./dom-util').setElementStyle;

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var movie = rateForm.movie.value;
  var rate = rateForm.rate.value;
  var buzz = rateForm.buzz.value;

  var buzzWords = buzz.split(',').map(function (word) {
    return word.trim().toLowerCase();
  });

  var invalidReason = validData({
    movie: movie,
    rate: rate,
    buzzWords: buzzWords
  });

  var alert = rateForm.querySelector('.alert');

  function getMessage() {
    switch (invalidReason) {
      case validData.MOVIE_REQUIRED:
        return 'Movie required.';
      case validData.RATE_REQUIRED:
        return 'Rate required.';
      case validData.INVALID_RATE:
        return 'Invalid rate ' + rate + '.';
      case validData.INVALID_BUZZ:
        return 'Invalid buzz words ' + buzzWords.join(', ');
    }

    return 'The movie ' + movie + ' has been rated ' + rate + '!';
  }

  setElementStyle(alert, { display: 'block' });

  alert.classList.toggle('alert-danger', invalidReason);
  alert.classList.toggle('alert-success', !invalidReason);

  alert.innerHTML = getMessage();

  if (movie.startsWith('007')) new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark')) setElementStyle(body, { background: 'black' });
});