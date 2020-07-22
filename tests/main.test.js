import "dotenv/config";
import _ from "lodash";
import axios from "axios";
import { DB, Models, Services, Views } from "../src";
// import * as Models from "../src/models";
// import DB from "../src/database";

describe("Describe", () => {
  //
  test("Test", async () => {
    //
    DB.connect();

    // const { PropertyService } = Services;
    const { PropertyView } = Views;
    const { Property } = Models;

    // const property_id = 5552;
    const property_id = 58193;

    const property = await Property.findByPk(property_id);

    const $property = await PropertyView.build(property);

    console.log(JSON.stringify($property, null, 2));

    expect(200).toBe(200);
  }, 30000);
});