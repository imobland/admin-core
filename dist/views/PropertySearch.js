(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../models"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../models"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.models);
    global.PropertySearch = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _models) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PropertySearch {
    //
    static async getByID(id) {
      return await _models.Property.findByPk(id);
    }

  }

  _exports.default = PropertySearch;
});