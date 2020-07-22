(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./PropertyView"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PropertyView"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PropertyView);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _PropertyView) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "PropertyView", {
    enumerable: true,
    get: function () {
      return _PropertyView.default;
    }
  });
  _PropertyView = _interopRequireDefault(_PropertyView);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});