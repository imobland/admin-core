import Sequelize, { Model } from "sequelize";

class SearchItem extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      search_item_id: {
        type: Sequelize.NUMBER,
        primaryKey: true,
      },
      realestate_id: Sequelize.NUMBER,
      type: Sequelize.STRING,
      primary: Sequelize.NUMBER,
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      tags: Sequelize.STRING,
      link: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "search_item",
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

export default SearchItem;
