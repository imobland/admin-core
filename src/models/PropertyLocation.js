import Sequelize, { Model } from "sequelize";

class PropertyLocation extends Model {
  //
  static init(sequelize) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      property_id: {
        type: Sequelize.NUMBER,
        primaryKey: true,
      },
      user_id: Sequelize.NUMBER,
      realestate_id: Sequelize.NUMBER,
      country: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      district: Sequelize.STRING,
      country_id: Sequelize.NUMBER,
      state_id: Sequelize.NUMBER,
      city_id: Sequelize.NUMBER,
      old_city_id: Sequelize.NUMBER,
      district_id: Sequelize.NUMBER,
      cep: Sequelize.STRING,
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      area: Sequelize.STRING,
      date_created: Sequelize.DATE,
      last_modified: Sequelize.DATE,
      lat: Sequelize.STRING,
      lon: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "property_location",
      sequelize,
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

export default PropertyLocation;
