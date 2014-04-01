/* global module */

module.exports = (function () {
  'use strict';

  function extend(objProps, staticProps) {
    function Surrogate(options) {
      var prop;

      // extend options with default values
      // that were not provided
      for (prop in this.constructor.defaults) {
        options[prop] = options[prop] || this.constructor.defaults[prop];
      }

      // define all props in new object instance
      for (prop in options) {
        this[prop] = options[prop];
      }
    }

    Surrogate.prototype.constructor = Surrogate;

    // store obj defaults in Surrogate
    Surrogate.defaults = objProps;

    // define static properties
    // shared among all objects
    // a.k.a. Surrogate properties
    for (var prop in staticProps) {
      Surrogate[prop] = staticProps[prop];
    }

    return Surrogate;
  };

  return extend;
}());
