require("dotenv/config");
import service from "../src/services/IntegrationService";
import { Models } from "../src";
const { Realestate, Integration } = Models;

async function runAsync() {
  //
  // try {
  //   var success = await service.bindIntegrationByKeys("devsite1", "vivareal");
  // } catch (e) {
  //   if (e.original && e.original.code == "ER_DUP_ENTRY") {
  //     console.log({ message: "already-connected" });
  //     return;
  //   }
  //   throw e
  // }

  await service.unbindIntegrationByKeys("devsite1", "vivareal");
}

runAsync();
