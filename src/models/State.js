import Sequelize, { Model } from "sequelize";

class State extends Model {
  //
  static init(sequelize) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      state_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      country: Sequelize.STRING,
      abbreviations: Sequelize.STRING,
      name: Sequelize.STRING,
      country_id: Sequelize.NUMBER,
    };

    super.init(fields, {
      tableName: "state",
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

export default State;
