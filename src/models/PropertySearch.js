import Sequelize, { Model } from "sequelize";

class PropertySearch extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      property_id: {
        type: Sequelize.NUMBER,
        primaryKey: true,
      },
      realestate_id: Sequelize.NUMBER,
      user_id: Sequelize.NUMBER,
      words: Sequelize.STRING,
      description: Sequelize.STRING,
      reference: Sequelize.STRING,
      published: Sequelize.NUMBER,
      highlighted: Sequelize.NUMBER,
      price: Sequelize.NUMBER,
      type_id: Sequelize.NUMBER,
      operation_id: Sequelize.NUMBER,
      objective_id: Sequelize.NUMBER,
      city_id: Sequelize.NUMBER,
      district_id: Sequelize.NUMBER,
      state_id: Sequelize.NUMBER,
      lat: Sequelize.NUMBER,
      lon: Sequelize.NUMBER,
      last_modified: Sequelize.DATE,
      date_created: Sequelize.DATE,
      highlighted_date: Sequelize.DATE,
      token: Sequelize.STRING,
      title: Sequelize.STRING,
      tags: Sequelize.STRING,
      // __date_cached: Sequelize.DATE,
    };

    super.init(fields, {
      tableName: "property_search",
      sequelize,
      ...config,
    });

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    // this.hasMany(models.Integration, {
    //   foreignKey: "Property_id",
    //   as: "integrations",
    // });
  }
}

export default PropertySearch;
