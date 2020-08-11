require("dotenv/config");
const { DB, Models, Services, Views } = require("../dist");

const { PropertyView, PropertySearch: PSearch } = Views;
const { Property, PropertySearch } = Models;

(async () => {
  //
  const conn = DB.connect();

  const property_id = 58681;

  // const CryptoJS = require("crypto-js");

  // var wordArray = CryptoJS.enc.Utf8.parse(JSON.stringify(["KEYS"]));
  // const keys = CryptoJS.enc.Base64.stringify(wordArray);
  
  // const arr = CryptoJS.enc.Base64.parse("WyJUZXN0ZSJd");
  // var res = CryptoJS.enc.Utf8.stringify(arr);

  // console.log(res);

  // return;
  const property = await Property.findByPk(property_id);

  const $property = await PropertyView.build(property);

  console.log(JSON.stringify($property, null, 2));
  //
  conn.close();
})();
