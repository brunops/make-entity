/* global module */

module.exports = (function () {
  'user strict';

  function Entity(options) {
    this.init(options);
  }

  Entity.prototype.init = function (options) {
    for (var prop in this.constructor.defaults) {
      this[prop] = options[prop] || this.constructor.defaults[prop];
    }
  };

  Entity.extend = function (objProps, staticProps) {
    function Surrogate() {
      Entity.apply(this, arguments);
    }
    Surrogate.prototype = new Entity();
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

  return Entity;
}());
