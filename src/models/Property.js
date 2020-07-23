import Sequelize, { Model } from "sequelize";
import _ from "lodash";

class Property extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      property_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      realestate_id: Sequelize.NUMBER,
      user_id: Sequelize.NUMBER,
      type_id: Sequelize.NUMBER,
      operation_id: Sequelize.NUMBER,
      client_id: Sequelize.NUMBER,
      agent_id: Sequelize.NUMBER,
      objective_id: Sequelize.NUMBER,
      reference: Sequelize.STRING,
      price: Sequelize.NUMBER,
      title: Sequelize.STRING,
      published: Sequelize.BOOLEAN,
      display_homepage: Sequelize.BOOLEAN,
      display_address: Sequelize.BOOLEAN,
      private_exclusive: Sequelize.BOOLEAN,
      private_authorized: Sequelize.BOOLEAN,
      private_observations: Sequelize.BOOLEAN,
      video_url: Sequelize.STRING,
      description: Sequelize.STRING,
      isnew: Sequelize.BOOLEAN,
      date_featured: Sequelize.DATE,

      insert_date: Sequelize.DATE,
      last_modified: Sequelize.DATE,

      data: Sequelize.DATE,
      migration_id: Sequelize.STRING,
      keywords: Sequelize.STRING,
      youtube_link: Sequelize.STRING,
      tour360_link: Sequelize.STRING,
      token: Sequelize.STRING,
      location_embed: Sequelize.STRING,

      migrated: Sequelize.BOOLEAN,
      alert: Sequelize.STRING,
      pictures_ready: Sequelize.BOOLEAN,
      friendly_url: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "property",
      sequelize,
      ...config,
    });

    return this;
  }

  // ---------------------------------------------------------------------------

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    // this.hasMany(models.Integration, {
    //   foreignKey: "Property_id",
    //   as: "integrations",
    // });
  }

  // merge(data, only = []) {
  //   const fields = _.pick(data, only);
  //   if (_.isEmpty(fields)) {
  //     return false;
  //   }
  //   Object.assign(this, fields);
  //   return true;
  // }

  // ---------------------------------------------------------------------------
}

export default Property;
