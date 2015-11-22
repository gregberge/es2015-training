function Hello(name) {
  this.name = name;
}

Hello.prototype.say = function () {
  return 'hello ' + this.name + '!';
};

var _id = 0;

function HelloDate() {
  Hello.apply(this, arguments);

  Object.defineProperty(this, 'id', {
    value: ++_id,
    writable: false,
    configurable: false
  });
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

  return hello + ' ' + hours + ':' + minutes + ' (' + getEllapsedMinutes() + ' min)' + ' #' + this.id;
};

var hello = new HelloDate('Johnny');


console.log(hello.say());
