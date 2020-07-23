import Sequelize, { Model } from "sequelize";

class Realestate extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      realestate_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      nickname: Sequelize.STRING,
      email: Sequelize.STRING,
      domain: Sequelize.STRING,
      subdomain: Sequelize.STRING,
      nickname: Sequelize.STRING,
      date_created: Sequelize.STRING,
      last_modified: Sequelize.STRING,
      address: Sequelize.STRING,
      picture_application_token: Sequelize.STRING,
      picture_application_id: Sequelize.STRING,
      country_id: Sequelize.STRING,
      state_id: Sequelize.STRING,
      city_id: Sequelize.STRING,
      district_id: Sequelize.STRING,
      postalcode: Sequelize.STRING,
      latitude: Sequelize.STRING,
      longitude: Sequelize.STRING,
      preferences: Sequelize.STRING,
      use_friendly_url: Sequelize.STRING,
      config: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "realestate",
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

export default Realestate;
