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
    global.Application = mod.exports;
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

  class Application extends _sequelize.Model {
    //
    static init(sequelize, config = {}) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        id: {
          type: _sequelize.default.INTEGER,
          primaryKey: true
        },
        name: _sequelize.default.STRING,
        domain: _sequelize.default.STRING,
        active: _sequelize.default.INTEGER,
        email: _sequelize.default.STRING,
        nickname: _sequelize.default.STRING,
        created_at: _sequelize.default.DATE,
        picture_application_token: _sequelize.default.STRING
      };
      super.init(fields, {
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

  var _default = Application;
  _exports.default = _default;
});