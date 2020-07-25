(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Property", "./PropertyType", "./Realestate", "./Picture", "./Agent", "./Client", "./PropertyLocation", "./City", "./State", "./District", "./PropertySearch", "./SearchItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Property"), require("./PropertyType"), require("./Realestate"), require("./Picture"), require("./Agent"), require("./Client"), require("./PropertyLocation"), require("./City"), require("./State"), require("./District"), require("./PropertySearch"), require("./SearchItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Property, global.PropertyType, global.Realestate, global.Picture, global.Agent, global.Client, global.PropertyLocation, global.City, global.State, global.District, global.PropertySearch, global.SearchItem);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Property, _PropertyType, _Realestate, _Picture, _Agent, _Client, _PropertyLocation, _City, _State, _District, _PropertySearch, _SearchItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Property", {
    enumerable: true,
    get: function () {
      return _Property.default;
    }
  });
  Object.defineProperty(_exports, "PropertyType", {
    enumerable: true,
    get: function () {
      return _PropertyType.default;
    }
  });
  Object.defineProperty(_exports, "Realestate", {
    enumerable: true,
    get: function () {
      return _Realestate.default;
    }
  });
  Object.defineProperty(_exports, "Picture", {
    enumerable: true,
    get: function () {
      return _Picture.default;
    }
  });
  Object.defineProperty(_exports, "Agent", {
    enumerable: true,
    get: function () {
      return _Agent.default;
    }
  });
  Object.defineProperty(_exports, "Client", {
    enumerable: true,
    get: function () {
      return _Client.default;
    }
  });
  Object.defineProperty(_exports, "PropertyLocation", {
    enumerable: true,
    get: function () {
      return _PropertyLocation.default;
    }
  });
  Object.defineProperty(_exports, "City", {
    enumerable: true,
    get: function () {
      return _City.default;
    }
  });
  Object.defineProperty(_exports, "State", {
    enumerable: true,
    get: function () {
      return _State.default;
    }
  });
  Object.defineProperty(_exports, "District", {
    enumerable: true,
    get: function () {
      return _District.default;
    }
  });
  Object.defineProperty(_exports, "PropertySearch", {
    enumerable: true,
    get: function () {
      return _PropertySearch.default;
    }
  });
  Object.defineProperty(_exports, "SearchItem", {
    enumerable: true,
    get: function () {
      return _SearchItem.default;
    }
  });
  _Property = _interopRequireDefault(_Property);
  _PropertyType = _interopRequireDefault(_PropertyType);
  _Realestate = _interopRequireDefault(_Realestate);
  _Picture = _interopRequireDefault(_Picture);
  _Agent = _interopRequireDefault(_Agent);
  _Client = _interopRequireDefault(_Client);
  _PropertyLocation = _interopRequireDefault(_PropertyLocation);
  _City = _interopRequireDefault(_City);
  _State = _interopRequireDefault(_State);
  _District = _interopRequireDefault(_District);
  _PropertySearch = _interopRequireDefault(_PropertySearch);
  _SearchItem = _interopRequireDefault(_SearchItem);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});