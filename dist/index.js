(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./database", "./models", "./services", "./views", "./utils/Cache"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./database"), require("./models"), require("./services"), require("./views"), require("./utils/Cache"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.database, global.models, global.services, global.views, global.Cache);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _database, Models, Services, Views, _Cache) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "DB", {
    enumerable: true,
    get: function () {
      return _database.default;
    }
  });
  Object.defineProperty(_exports, "Cache", {
    enumerable: true,
    get: function () {
      return _Cache.default;
    }
  });
  _exports.Views = _exports.Services = _exports.Models = void 0;
  _database = _interopRequireDefault(_database);
  Models = _interopRequireWildcard(Models);
  _exports.Models = Models;
  Services = _interopRequireWildcard(Services);
  _exports.Services = Services;
  Views = _interopRequireWildcard(Views);
  _exports.Views = Views;
  _Cache = _interopRequireDefault(_Cache);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});