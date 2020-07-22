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
    global.Integration = mod.exports;
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

  class Integration extends _sequelize.Model {
    //
    static init(sequelize) {
      //
      const fields = {
        enabled: {
          type: _sequelize.default.INTEGER,
          defaultValue: 1
        },
        config: {
          type: _sequelize.default.TEXT,
          defaultValue: "{}",
          get: function () {
            return JSON.parse(this.getDataValue("config"));
          },
          set: function (value) {
            this.setDataValue("config", JSON.stringify(value));
          }
        },
        created_at: _sequelize.default.DATE
      };
      super.init(fields, {
        sequelize
      });
      return this;
    } // ---------------------------------------------------------------------------


    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "users"
      });
      this.belongsTo(models.Client, {
        foreignKey: "client_id",
        as: "clients"
      });
      this.belongsTo(models.Partner, {
        foreignKey: "partner_id",
        as: "partner"
      });
    } // ---------------------------------------------------------------------------


  }

  var _default = Integration;
  _exports.default = _default;
});