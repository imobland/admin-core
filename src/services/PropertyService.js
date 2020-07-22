import { Property } from "../models";

export default class PropertyService {
  //
  static async getByID(id) {
    return await Property.findByPk(id);
  }
}
