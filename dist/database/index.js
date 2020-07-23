(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "sequelize", "../config/database", "../models/Property", "../models/PropertyType", "../models/Realestate", "../models/Picture", "../models/Client", "../models/Agent", "../models/PropertyLocation", "../models/PropertySearch", "../models/City", "../models/State", "../models/District"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("sequelize"), require("../config/database"), require("../models/Property"), require("../models/PropertyType"), require("../models/Realestate"), require("../models/Picture"), require("../models/Client"), require("../models/Agent"), require("../models/PropertyLocation"), require("../models/PropertySearch"), require("../models/City"), require("../models/State"), require("../models/District"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.sequelize, global.database, global.Property, global.PropertyType, global.Realestate, global.Picture, global.Client, global.Agent, global.PropertyLocation, global.PropertySearch, global.City, global.State, global.District);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _sequelize, _database, _Property, _PropertyType, _Realestate, _Picture, _Client, _Agent, _PropertyLocation, _PropertySearch, _City, _State, _District) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _sequelize = _interopRequireDefault(_sequelize);
  _database = _interopRequireDefault(_database);
  _Property = _interopRequireDefault(_Property);
  _PropertyType = _interopRequireDefault(_PropertyType);
  _Realestate = _interopRequireDefault(_Realestate);
  _Picture = _interopRequireDefault(_Picture);
  _Client = _interopRequireDefault(_Client);
  _Agent = _interopRequireDefault(_Agent);
  _PropertyLocation = _interopRequireDefault(_PropertyLocation);
  _PropertySearch = _interopRequireDefault(_PropertySearch);
  _City = _interopRequireDefault(_City);
  _State = _interopRequireDefault(_State);
  _District = _interopRequireDefault(_District);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // import User from "../models/User";
  // import Client from "../models/Client";
  // import Partner from "../models/Partner";
  // import Integration from "../models/Integration";
  class DB {
    //
    static connect(config = {}) {
      //
      const sequelize = new _sequelize.default({ ..._database.default,
        ...config
      });
      console.log("Conectado ao DB");
      const models = config.models ? config.models : {};

      _Property.default.init(sequelize, models.Property);

      _PropertyType.default.init(sequelize, models.PropertyType);

      _Realestate.default.init(sequelize, models.Realestate);

      _Picture.default.init(sequelize, models.Picture);

      _Agent.default.init(sequelize, models.Agent);

      _Client.default.init(sequelize, models.Client);

      _PropertyLocation.default.init(sequelize, models.PropertyLocation);

      _PropertySearch.default.init(sequelize, models.PropertySearch);

      _City.default.init(sequelize, models.City);

      _State.default.init(sequelize, models.State);

      _District.default.init(sequelize, models.District);

      _Property.default.associate(sequelize.models);

      _PropertyType.default.associate(sequelize.models);

      _Realestate.default.associate(sequelize.models);

      _Picture.default.associate(sequelize.models);

      _Agent.default.associate(sequelize.models);

      _Client.default.associate(sequelize.models);

      _PropertyLocation.default.associate(sequelize.models);

      _PropertySearch.default.associate(sequelize.models);

      _City.default.associate(sequelize.models);

      _State.default.associate(sequelize.models);

      _District.default.associate(sequelize.models);

      return sequelize;
    }

  }

  var _default = DB;
  _exports.default = _default;
});