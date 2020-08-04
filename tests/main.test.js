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
    DB.connect({
      models: {
        Property: {
          tableName: "property",
        },
      },
    });

    // const { PropertyService } = Services;
    const { PropertyView, PropertySearch: PSearch } = Views;
    const { Property, PropertySearch } = Models;

    // const property_id = 5552;
    const property_id = 58193;

    const property = await Property.findByPk(property_id);

    console.log(JSON.stringify(property, null, 2));

    // const $property = await PropertySearch.findByPk(property_id);
    // console.log(JSON.stringify($property, null, 2));

    // const _property = await PSearch.build(property);

    // console.log(JSON.stringify(_property, null, 2));

    const $property = await PropertyView.build(property);

    expect(200).toBe(200);
  }, 30000);
});
