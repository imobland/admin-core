import Sequelize, { Model } from "sequelize";

class District extends Model {
  //
  static init(sequelize) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      district_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      country: Sequelize.STRING,
      city_id: Sequelize.NUMBER,
      old_city_id: Sequelize.NUMBER,
      state_id: Sequelize.NUMBER,
      insert_date: Sequelize.DATE,
    };

    super.init(fields, {
      tableName: "district",
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

export default District;
