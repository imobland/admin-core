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
    global.PropertySearch = mod.exports;
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

  class PropertySearch extends _sequelize.Model {
    //
    static init(sequelize) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        property_id: {
          type: _sequelize.default.NUMBER,
          primaryKey: true
        },
        realestate_id: _sequelize.default.NUMBER,
        user_id: _sequelize.default.NUMBER,
        words: _sequelize.default.STRING,
        description: _sequelize.default.STRING,
        reference: _sequelize.default.STRING,
        published: _sequelize.default.NUMBER,
        highlighted: _sequelize.default.NUMBER,
        price: _sequelize.default.NUMBER,
        type_id: _sequelize.default.NUMBER,
        operation_id: _sequelize.default.NUMBER,
        objective_id: _sequelize.default.NUMBER,
        city_id: _sequelize.default.NUMBER,
        district_id: _sequelize.default.NUMBER,
        state_id: _sequelize.default.NUMBER,
        lat: _sequelize.default.NUMBER,
        lon: _sequelize.default.NUMBER,
        last_modified: _sequelize.default.DATE,
        date_created: _sequelize.default.DATE,
        highlighted_date: _sequelize.default.DATE,
        token: _sequelize.default.STRING,
        title: _sequelize.default.STRING,
        tags: _sequelize.default.STRING // __date_cached: Sequelize.DATE,

      };
      super.init(fields, {
        tableName: "property_search",
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

  var _default = PropertySearch;
  _exports.default = _default;
});