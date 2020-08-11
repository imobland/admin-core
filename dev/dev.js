require("dotenv/config");
const { DB, Models, Services, Views } = require("../dist");

const { PropertyView, PropertySearch: PSearch } = Views;
const { Property, PropertySearch } = Models;

(async () => {
  //
  const conn = DB.connect();

  const property_id = 58681;

  const property = await Property.findByPk(property_id);

  const $property = await PropertyView.build(property);

  console.log(JSON.stringify($property, null, 2));
  //
  conn.close();
})();
