require("dotenv/config");
import service from "../src/services/IntegrationService";
import { Models, Services } from "../src";

const { IntegrationService } = Services;
const { Realestate, Integration } = Models;

async function runAsync() {
  //
  // try {
  //   var success = await IntegrationService.bindIntegrationByKeys("devsite1", "vivareal");
  // } catch (e) {
  //   if (e.original && e.original.code == "ER_DUP_ENTRY") {
  //     console.log({ message: "already-connected" });
  //     return;
  //   }
  //   throw e
  // }

  await IntegrationService.unbindIntegrationByKeys("devsite1", "vivareal");
}

runAsync();
