(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../database", "../models"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../database"), require("../models"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.database, global.models);
    global.IntegrationService = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _database, _models) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _database = _interopRequireDefault(_database);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  require("dotenv/config");

  const connection = _database.default.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  async function bindIntegrationByKeys(realestate_key, integration_key) {
    const [realestate, integration] = await Promise.all([_models.Realestate.findOne({
      where: {
        nickname: realestate_key
      }
    }), _models.Integration.findOne({
      where: {
        nickname: integration_key
      }
    })]);
    return bindIntegration(realestate, integration);
  }

  async function bindIntegration(realestate, integration) {
    if (!realestate) {
      throw Error("realestate must be defined");
    }

    if (!integration) {
      throw Error("integration must be defined");
    }

    const integration_id = integration.integration_id;
    const realestate_id = realestate.realestate_id;
    const [r1, r2] = await Promise.all([connection.query(`INSERT INTO \`integration_realestate\` (\`integration_id\`, \`realestate_id\`) 
          VALUES (':integration_id', ':realestate_id');
        `, {
      replacements: {
        integration_id,
        realestate_id
      }
    }), connection.query(`INSERT INTO \`connection_realestate_integration\` (\`integration_id\`, \`realestate_id\`) 
          VALUES (':integration_id', ':realestate_id');
        `, {
      replacements: {
        integration_id,
        realestate_id
      }
    })]);
    return true;
  }

  async function unbindIntegrationByKeys(realestate_key, integration_key) {
    const [realestate, integration] = await Promise.all([_models.Realestate.findOne({
      where: {
        nickname: realestate_key
      }
    }), _models.Integration.findOne({
      where: {
        nickname: integration_key
      }
    })]);
    return unbindIntegration(realestate, integration);
  }

  async function unbindIntegration(realestate, integration) {
    //
    if (!realestate) {
      throw Error("realestate must be defined");
    }

    if (!integration) {
      throw Error("integration must be defined");
    }

    const integration_id = integration.integration_id;
    const realestate_id = realestate.realestate_id;
    const [r1, r2] = await Promise.all([connection.query(`DELETE FROM \`integration_realestate\` 
        WHERE integration_id = ':integration_id '
        AND realestate_id = ':realestate_id'
      `, {
      replacements: {
        integration_id,
        realestate_id
      }
    }), connection.query(`DELETE FROM \`connection_realestate_integration\`
        WHERE integration_id = ':integration_id' 
          AND realestate_id = ':realestate_id'
        `, {
      replacements: {
        integration_id,
        realestate_id
      }
    })]);
    return true;
  }

  var _default = {
    //
    bindIntegrationByKeys,
    unbindIntegrationByKeys,
    bindIntegration,
    unbindIntegration
  };
  _exports.default = _default;
});