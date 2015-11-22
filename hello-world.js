function Hello(name) {
  this.name = name;
}

Hello.prototype.say = function () {
  return 'hello ' + this.name + '!';
};

function HelloDate() {
  Hello.apply(this, arguments);
}

HelloDate.prototype = Object.create(Hello.prototype);

HelloDate.prototype.say = function () {
  var hello = Hello.prototype.say.call(this);

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  function getEllapsedMinutes() {
    return hours * 60 + minutes;
  }

  return hello + ' ' + hours + ':' + minutes + ' (' + getEllapsedMinutes() + ' min)';
};

var hello = new HelloDate('Johnny');
console.log(hello.say());
