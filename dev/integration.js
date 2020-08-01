require("dotenv/config");
import service from "../src/services/IntegrationService";
import { Models, Services, DB } from "../src";

const { IntegrationService } = Services;
const { Realestate, Integration } = Models;

const connection = DB.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

async function runAsync() {
  //
  try {
    var success = await IntegrationService.bindIntegrationByKeys("devsite1", "vivareal");
  } catch (e) {
    if (e.original && e.original.code == "ER_DUP_ENTRY") {
      console.log({ message: "already-connected" });
      return;
    }
    throw e
  }

  await IntegrationService.unbindIntegrationByKeys("devsite1", "vivareal");
}

runAsync();
