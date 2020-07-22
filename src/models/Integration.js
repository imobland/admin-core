import Sequelize, { Model } from "sequelize";

class Integration extends Model {
  //
  static init(sequelize) {
    //
    const fields = {
      enabled: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      config: {
        type: Sequelize.TEXT,
        defaultValue: "{}",
        get: function () {
          return JSON.parse(this.getDataValue("config"));
        },
        set: function (value) {
          this.setDataValue("config", JSON.stringify(value));
        },
      },
      created_at: Sequelize.DATE,
    };

    super.init(fields, {
      sequelize,
    });

    return this;
  }

  // ---------------------------------------------------------------------------

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    this.belongsTo(models.Client, { foreignKey: "client_id", as: "clients" });
    this.belongsTo(models.Partner, { foreignKey: "partner_id", as: "partner" });
  }

  // ---------------------------------------------------------------------------
}

export default Integration;
