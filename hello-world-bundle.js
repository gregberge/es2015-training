/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HelloDate = __webpack_require__(1);

	document.write(
	  Array.apply(null, new Array(5))
	    .map(function () {
	      return new HelloDate().id;
	    })
	    .filter(function (id, index) { 
	      return index >= 2;
	    })
	    .join('-')
	);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Hello = __webpack_require__(2);
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

	module.exports = HelloDate;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Hello(name) {
	  this.name = name;
	}

	Hello.prototype.say = function () {
	  return 'hello ' + this.name + '!';
	};

	module.exports = Hello;


/***/ }
/******/ ]);