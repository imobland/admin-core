(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./PropertyService", "./IntegrationService"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PropertyService"), require("./IntegrationService"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PropertyService, global.IntegrationService);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _PropertyService, _IntegrationService) {
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
  Object.defineProperty(_exports, "IntegrationService", {
    enumerable: true,
    get: function () {
      return _IntegrationService.default;
    }
  });
  _PropertyService = _interopRequireDefault(_PropertyService);
  _IntegrationService = _interopRequireDefault(_IntegrationService);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});