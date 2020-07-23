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
    global.Picture = mod.exports;
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

  class Picture extends _sequelize.Model {
    //
    static init(sequelize, config = {}) {
      //
      this.prototype.connection = sequelize;
      const fields = {
        picture_id: {
          type: _sequelize.default.STRING,
          primaryKey: true
        },
        user_id: _sequelize.default.NUMBER,
        realestate_id: _sequelize.default.NUMBER,
        property_id: _sequelize.default.NUMBER,
        version: _sequelize.default.NUMBER,
        title: _sequelize.default.STRING,
        name: _sequelize.default.STRING,
        src: _sequelize.default.STRING,
        path: _sequelize.default.STRING,
        extension: _sequelize.default.STRING,
        size: _sequelize.default.NUMBER,
        date_created: _sequelize.default.STRING,
        display: _sequelize.default.NUMBER,
        position: _sequelize.default.NUMBER,
        thumb: _sequelize.default.STRING,
        colors: _sequelize.default.STRING,
        type: _sequelize.default.STRING,
        insert_date: _sequelize.default.STRING
      };
      super.init(fields, {
        tableName: "picture",
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

    static getFullPath(pic) {
      //
      if (pic.version == "1") {
        var re = /([a-zA-Z0-9]+).jpg/i;
        var m = pic.path.match(re);

        if (m) {
          return "https://pictureimobland.blob.core.windows.net/gallery/" + pic.path.replace(m[0], m[1] + "/" + m[1] + "-1920.jpg");
        }
      }

      return "https://pictureimobland.blob.core.windows.net/gallery/" + pic.path;
    }

  }

  var _default = Picture;
  _exports.default = _default;
});