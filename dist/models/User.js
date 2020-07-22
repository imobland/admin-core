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
    global.User = mod.exports;
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

  // import bcrypt from "bcryptjs";
  // import jwt from "jsonwebtoken";
  // import authConfig from "../config/auth";
  class User extends _sequelize.Model {
    //
    static init(sequelize) {
      //
      super.init({
        name: _sequelize.default.STRING,
        email: _sequelize.default.STRING,
        password: _sequelize.default.VIRTUAL,
        password_hash: _sequelize.default.STRING,
        access_token: _sequelize.default.STRING
      }, {
        sequelize
      }); // Hooks

      this.addHook("beforeSave", async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      });
      return this;
    } // ---------------------------------------------------------------------------


    static associate(models) {
      this.hasMany(models.Client, {
        foreignKey: "user_id",
        as: "clients"
      });
      this.hasMany(models.Partner, {
        foreignKey: "user_id",
        as: "partners"
      });
    } // ---------------------------------------------------------------------------


    checkPassword(password) {
      return bcrypt.compare(password, this.password_hash);
    } // ---------------------------------------------------------------------------


    generateToken() {
      return jwt.sign({
        id: this.id
      }, authConfig.secret, {// expiresIn: authConfig.expiresIn,
      });
    } // ---------------------------------------------------------------------------


  }

  var _default = User;
  _exports.default = _default;
});