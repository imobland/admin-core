(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "sequelize"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("sequelize"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.sequelize);
    global.Realestate = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _sequelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _sequelize = _interopRequireWildcard(_sequelize);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  class Realestate extends _sequelize.Model {
    //
    static init(sequelize, config = {}) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        realestate_id: {
          type: _sequelize.default.INTEGER,
          primaryKey: true
        },
        name: _sequelize.default.STRING,
        nickname: _sequelize.default.STRING,
        email: _sequelize.default.STRING,
        domain: _sequelize.default.STRING,
        subdomain: _sequelize.default.STRING,
        nickname: _sequelize.default.STRING,
        date_created: _sequelize.default.STRING,
        last_modified: _sequelize.default.STRING,
        address: _sequelize.default.STRING,
        picture_application_token: _sequelize.default.STRING,
        picture_application_id: _sequelize.default.STRING,
        country_id: _sequelize.default.STRING,
        state_id: _sequelize.default.STRING,
        city_id: _sequelize.default.STRING,
        district_id: _sequelize.default.STRING,
        postalcode: _sequelize.default.STRING,
        latitude: _sequelize.default.STRING,
        longitude: _sequelize.default.STRING,
        preferences: _sequelize.default.STRING,
        use_friendly_url: _sequelize.default.STRING,
        config: _sequelize.default.STRING
      };
      super.init(fields, {
        tableName: "realestate",
        sequelize,
        ...config
      });
      return this;
    }

    static associate(models) {// this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
      // this.hasMany(models.Integration, {
      //   foreignKey: "Property_id",
      //   as: "integrations",
      // });
    }

  }

  var _default = Realestate;
  _exports.default = _default;
});