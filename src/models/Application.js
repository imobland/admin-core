import Sequelize, { Model } from "sequelize";

class Application extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      name: Sequelize.STRING,
      domain: Sequelize.STRING,
      active: Sequelize.INTEGER,
      email: Sequelize.STRING,
      nickname: Sequelize.STRING,
      created_at: Sequelize.DATE,
      picture_application_token: Sequelize.STRING,
    };

    super.init(fields, {
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

export default Application;
