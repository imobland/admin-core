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
    global.PropertyLocation = mod.exports;
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

  class PropertyLocation extends _sequelize.Model {
    //
    static init(sequelize) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        property_id: {
          type: _sequelize.default.NUMBER,
          primaryKey: true
        },
        user_id: _sequelize.default.NUMBER,
        realestate_id: _sequelize.default.NUMBER,
        country: _sequelize.default.STRING,
        state: _sequelize.default.STRING,
        city: _sequelize.default.STRING,
        district: _sequelize.default.STRING,
        country_id: _sequelize.default.NUMBER,
        state_id: _sequelize.default.NUMBER,
        city_id: _sequelize.default.NUMBER,
        old_city_id: _sequelize.default.NUMBER,
        district_id: _sequelize.default.NUMBER,
        cep: _sequelize.default.STRING,
        street: _sequelize.default.STRING,
        number: _sequelize.default.STRING,
        complement: _sequelize.default.STRING,
        area: _sequelize.default.STRING,
        date_created: _sequelize.default.DATE,
        last_modified: _sequelize.default.DATE,
        lat: _sequelize.default.STRING,
        lon: _sequelize.default.STRING
      };
      super.init(fields, {
        tableName: "property_location",
        sequelize
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

  var _default = PropertyLocation;
  _exports.default = _default;
});