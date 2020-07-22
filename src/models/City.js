import Sequelize, { Model } from "sequelize";

class City extends Model {
  //
  static init(sequelize) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      city_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      state_id: Sequelize.NUMBER,
      country: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "city",
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

export default City;
