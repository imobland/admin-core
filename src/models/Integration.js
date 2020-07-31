import Sequelize, { Model } from "sequelize";

class Integration extends Model {
  //
  static init(sequelize, config = {}) {
    //
    const fields = {
      integration_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      nickname: Sequelize.NUMBER,
    };

    super.init(fields, {
      tableName: "integration",
      sequelize,
      ...config,
    });

    return this;
  }

  // ---------------------------------------------------------------------------

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    // this.belongsTo(models.Client, { foreignKey: "client_id", as: "clients" });
    // this.belongsTo(models.Partner, { foreignKey: "partner_id", as: "partner" });
  }

  // ---------------------------------------------------------------------------
}

export default Integration;
