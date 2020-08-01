import DB from "../database";

import { Realestate, Integration } from "../models";

async function bindIntegrationByKeys(realestate_key, integration_key) {
  //
  const [realestate, integration] = await Promise.all([
    Realestate.findOne({ where: { nickname: realestate_key } }),
    Integration.findOne({ where: { nickname: integration_key } }),
  ]);
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

  const connection = DB.getConnection();

  const [r1, r2] = await Promise.all([
    connection.query(
      `INSERT INTO \`integration_realestate\` (\`integration_id\`, \`realestate_id\`) 
          VALUES (':integration_id', ':realestate_id');
        `,
      { replacements: { integration_id, realestate_id } }
    ),
    connection.query(
      `INSERT INTO \`connection_realestate_integration\` (\`integration_id\`, \`realestate_id\`) 
          VALUES (':integration_id', ':realestate_id');
        `,
      { replacements: { integration_id, realestate_id } }
    ),
  ]);

  return true;
}

async function unbindIntegrationByKeys(realestate_key, integration_key) {
  const [realestate, integration] = await Promise.all([
    Realestate.findOne({ where: { nickname: realestate_key } }),
    Integration.findOne({ where: { nickname: integration_key } }),
  ]);
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

  const connection = DB.getConnection();

  const [r1, r2] = await Promise.all([
    connection.query(
      `DELETE FROM \`integration_realestate\` 
        WHERE integration_id = ':integration_id '
        AND realestate_id = ':realestate_id'
      `,
      { replacements: { integration_id, realestate_id } }
    ),
    connection.query(
      `DELETE FROM \`connection_realestate_integration\`
        WHERE integration_id = ':integration_id' 
          AND realestate_id = ':realestate_id'
        `,
      { replacements: { integration_id, realestate_id } }
    ),
  ]);

  return true;
}

export default {
  //
  bindIntegrationByKeys,
  unbindIntegrationByKeys,
  bindIntegration,
  unbindIntegration,
};
