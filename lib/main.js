'use strict';

var rateForm = document.getElementById('rateForm');

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var rate = +rateForm.rate.value;

  if (Number.isInteger(rate) && rate >= 1 && rate <= 5) alert('OK');else alert('NOK');

  var movie = rateForm.movie.value;

  if (movie.startsWith('007')) new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark')) document.body.style.background = 'black';
});