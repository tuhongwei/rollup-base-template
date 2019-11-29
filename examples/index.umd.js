/**
 * rollup-base-template v1.0.0
 * (c) 2019 Twittytop
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.index = factory());
}(this, (function () { 'use strict';

  var index = 42;

  var index$1 = (function () {
    console.log("the answer is ".concat(index));
  });

  return index$1;

})));
