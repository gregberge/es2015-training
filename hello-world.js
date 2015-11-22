var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

function getEllapsedMinutes() {
  return hours * 60 + minutes;
}

console.log('hello world! ' + hours + ':' + minutes + ' (' + getEllapsedMinutes() + ' min)');
