import { Property } from "../models";

export default class PropertySearch {
  //
  static async getByID(id) {
    return await Property.findByPk(id);
  }
}
