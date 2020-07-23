(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "sequelize", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("sequelize"), require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.sequelize, global.lodash);
    global.Partner = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _sequelize, _lodash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _sequelize = _interopRequireWildcard(_sequelize);
  _lodash = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  class Partner extends _sequelize.Model {
    //
    static init(sequelize, config = {}) {
      //
      const fields = {
        ref: _sequelize.default.STRING,
        name: _sequelize.default.STRING,
        pattern: _sequelize.default.STRING,
        description: _sequelize.default.STRING,
        category: _sequelize.default.STRING,
        website: _sequelize.default.STRING,
        tags: {
          type: _sequelize.default.STRING,
          defaultValue: "",
          get: function () {
            const tags = this.getDataValue("tags");
            return tags ? tags.split(" ") : [];
          },
          set: function (value) {
            this.setDataValue("tags", value.join(" "));
          }
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
        contact: {
          type: _sequelize.default.TEXT,
          defaultValue: "{}",
          get: function () {
            return JSON.parse(this.getDataValue("contact"));
          },
          set: function (value) {
            this.setDataValue("contact", JSON.stringify(value));
          }
        },
        documentation: {
          type: _sequelize.default.TEXT,
          defaultValue: "{}",
          get: function () {
            return JSON.parse(this.getDataValue("documentation"));
          },
          set: function (value) {
            this.setDataValue("documentation", JSON.stringify(value));
          }
        },
        enabled: {
          type: _sequelize.default.INTEGER,
          defaultValue: 1
        }
      };
      super.init(fields, {
        sequelize,
        ...config
      });
      return this;
    } // ---------------------------------------------------------------------------


    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "users"
      });
      this.hasMany(models.Integration, {
        foreignKey: "partner_id",
        as: "integrations"
      });
    }

    merge(data, only = []) {
      const fields = _lodash.default.pick(data, only);

      if (_lodash.default.isEmpty(fields)) {
        return false;
      }

      Object.assign(this, fields);
      return true;
    } // ---------------------------------------------------------------------------


  }

  var _default = Partner;
  _exports.default = _default;
});