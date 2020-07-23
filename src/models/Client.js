import Sequelize, { Model } from "sequelize";

class Client extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      agent_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "client",
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

export default Client;
