function Hello(name) {
  this.name = name;
}

Hello.prototype.say = function () {
  return 'hello ' + this.name + '!';
};

module.exports = Hello;
