(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alds"] = factory();
	else
		root["alds"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var microbar = function () {
  function microbar() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, microbar);

    if (Object.prototype.hasOwnProperty.call(args, 'speed') && (typeof args.speed !== 'number' || args.speed > 10 || args.speed < 1)) {
      throw new Error('Speed should be an integer between 1 and 10.');
    }
    if (Object.prototype.hasOwnProperty.call(args, 'percentage') && (typeof args.percentage !== 'number' || args.percentage > 100 || args.percentage < 0)) {
      throw new Error('Percentage should be an integer between 0 and 100.');
    }

    this._percentage = args.percentage || 0;
    this._color = args.color || '#000000';
    this._speed = args.speed || 10;

    this._divs = this._initialize();

    this._bar = this._divs.bar;
    this._progress = this._divs.progress;
    this._shadow = this._divs.shadow;

    if (args.target) {
      this._bar.style.position = 'relative';

      document.getElementById(args.target).insertBefore(this._bar, document.getElementById(args.target).firstChild);
    } else {
      this._bar.style.position = 'fixed';

      document.getElementsByTagName('body')[0].appendChild(this._bar);
    }
  }

  _createClass(microbar, [{
    key: '_getEquivalentTime',
    value: function _getEquivalentTime(speed) {
      var time = 0.5 + Math.round(1 / speed);
      return time + 's';
    }
  }, {
    key: '_isColor',
    value: function _isColor(color) {
      var el = document.createElement('div');
      el.style.backgroundColor = color;
      if (el.style.backgroundColor.length === 0) {
        return false;
      }
      return true;
    }
  }, {
    key: '_transitionEndEventName',
    value: function _transitionEndEventName() {
      var el = document.createElement('div');
      var transitions = {
        transition: 'transitionend',
        OTransition: 'otransitionend',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd'
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(transitions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var transition = _step.value;

          if (Object.prototype.hasOwnProperty.call(transitions, transition) && el.style[transition] !== undefined) {
            return transitions[transition];
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: '_addStyleSheet',
    value: function _addStyleSheet() {
      if (document.getElementById('microbarstyles') !== null) {
        return;
      }

      var style = document.createElement('style');
      style.type = 'text/css';
      style.id = 'microbarstyles';

      if (style.styleSheet) {
        style.styleSheet.cssText = microbar.css;
      } else {
        style.appendChild(document.createTextNode(microbar.css));
      }

      document.head.insertBefore(style, null);
    }
  }, {
    key: '_initialize',
    value: function _initialize() {
      this._addStyleSheet();
      if (!this._isColor(this._color)) {
        throw new Error('Please check the color entered');
      }

      var bar = document.createElement('div');
      var progress = document.createElement('div');
      var shadow = document.createElement('div');

      var time = this._getEquivalentTime(this._speed);

      bar.className = 'microbar';

      progress.classList.add('mprogress');
      progress.style.backgroundColor = this._color;
      progress.style.width = this._percentage + '%';
      progress.style.transition = 'width ' + time + ' ease, opacity 0.3s ease';

      shadow.classList.add('mshadow');
      shadow.style.boxShadow = '0 0 10px ' + this._color;

      if (this._percentage === 0) {
        progress.style.opacity = 0;
      }

      progress.appendChild(shadow);
      bar.appendChild(progress);

      var transitionEnd = this._transitionEndEventName();

      if (transitionEnd === null) {
        throw new Error('Your browser is not supported.');
      }

      progress.addEventListener(transitionEnd, this._transitionEnd);

      return {
        bar: bar,
        progress: progress,
        shadow: shadow
      };
    }
  }, {
    key: '_transitionEnd',
    value: function _transitionEnd() {
      var width = this.style.width;
      if (width === '100%') {
        this.style.opacity = 0;
      }
    }
  }, {
    key: 'moveTo',
    value: function moveTo(point) {
      if (typeof point !== 'number' || point > 100 || point < 0) {
        throw new Error('Percentage should be an integer between 0 and 100.');
      }

      this._progress.style.opacity = 1;
      this._progress.style.width = point + '%';
    }
  }, {
    key: 'color',
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      if (!this._isColor(color)) {
        throw new Error('Please check the color entered');
      }
      this._color = color;

      this._progress.style.backgroundColor = color;
      this._shadow.style.boxShadow = '0 0 10px ' + color;
    }
  }, {
    key: 'speed',
    get: function get() {
      return this._speed;
    },
    set: function set(speed) {
      if (speed > 10 || speed < 1) {
        throw new RangeError('Speed should be an integer between 1 and 10.');
      }

      this._speed = speed;

      var time = this._getEquivalentTime(speed);
      this._progress.style.transition = 'width ' + time;
    }
  }]);

  return microbar;
}();

microbar.css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;}' + '.microbar .mprogress{width: 0;height: 100%;background-color: #000000;}' + '.microbar .mprogress .mshadow{width: 1%;position: relative;height: 100%;float: right;}';

module.exports = microbar;

/***/ })
/******/ ]);
});