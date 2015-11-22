'use strict';

var HelloDate = require('./hello-date');

console.log(
  Array.apply(null, new Array(5))
    .map(function () {
      return new HelloDate().id;
    })
    .filter(function (id, index) { 
      return index >= 2;
    })
    .join('-')
);
