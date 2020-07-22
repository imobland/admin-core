(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./PropertyService"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PropertyService"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PropertyService);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _PropertyService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "PropertyService", {
    enumerable: true,
    get: function () {
      return _PropertyService.default;
    }
  });
  _PropertyService = _interopRequireDefault(_PropertyService);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});