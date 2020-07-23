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
    global.Property = mod.exports;
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

  class Property extends _sequelize.Model {
    //
    static init(sequelize, config = {}) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        property_id: {
          type: _sequelize.default.INTEGER,
          primaryKey: true
        },
        realestate_id: _sequelize.default.NUMBER,
        user_id: _sequelize.default.NUMBER,
        type_id: _sequelize.default.NUMBER,
        operation_id: _sequelize.default.NUMBER,
        client_id: _sequelize.default.NUMBER,
        agent_id: _sequelize.default.NUMBER,
        objective_id: _sequelize.default.NUMBER,
        reference: _sequelize.default.STRING,
        price: _sequelize.default.NUMBER,
        title: _sequelize.default.STRING,
        published: _sequelize.default.BOOLEAN,
        display_homepage: _sequelize.default.BOOLEAN,
        display_address: _sequelize.default.BOOLEAN,
        private_exclusive: _sequelize.default.BOOLEAN,
        private_authorized: _sequelize.default.BOOLEAN,
        private_observations: _sequelize.default.BOOLEAN,
        video_url: _sequelize.default.STRING,
        description: _sequelize.default.STRING,
        isnew: _sequelize.default.BOOLEAN,
        date_featured: _sequelize.default.DATE,
        insert_date: _sequelize.default.DATE,
        last_modified: _sequelize.default.DATE,
        data: _sequelize.default.DATE,
        migration_id: _sequelize.default.STRING,
        keywords: _sequelize.default.STRING,
        youtube_link: _sequelize.default.STRING,
        tour360_link: _sequelize.default.STRING,
        token: _sequelize.default.STRING,
        location_embed: _sequelize.default.STRING,
        migrated: _sequelize.default.BOOLEAN,
        alert: _sequelize.default.STRING,
        pictures_ready: _sequelize.default.BOOLEAN,
        friendly_url: _sequelize.default.STRING
      };
      super.init(fields, {
        tableName: "property",
        sequelize,
        ...config
      });
      return this;
    } // ---------------------------------------------------------------------------


    static associate(models) {// this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
      // this.hasMany(models.Integration, {
      //   foreignKey: "Property_id",
      //   as: "integrations",
      // });
    } // merge(data, only = []) {
    //   const fields = _.pick(data, only);
    //   if (_.isEmpty(fields)) {
    //     return false;
    //   }
    //   Object.assign(this, fields);
    //   return true;
    // }
    // ---------------------------------------------------------------------------


  }

  var _default = Property;
  _exports.default = _default;
});