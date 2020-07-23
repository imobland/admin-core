import Sequelize from "sequelize";
import dbConfig from "../config/database";
// import User from "../models/User";
// import Client from "../models/Client";
// import Partner from "../models/Partner";
// import Integration from "../models/Integration";

import Property from "../models/Property";
import PropertyType from "../models/PropertyType";
import Realestate from "../models/Realestate";
import Picture from "../models/Picture";
import Client from "../models/Client";
import Agent from "../models/Agent";
import PropertyLocation from "../models/PropertyLocation";
import PropertySearch from "../models/PropertySearch";
import City from "../models/City";
import State from "../models/State";
import District from "../models/District";

class DB {
  //
  static connect(config) {
    //
    const sequelize = new Sequelize({
      ...dbConfig,
      ...config,
    });

    console.log("Conectado ao DB");

    Property.init(sequelize);
    PropertyType.init(sequelize);
    Realestate.init(sequelize);
    Picture.init(sequelize);
    Agent.init(sequelize);
    Client.init(sequelize);
    PropertyLocation.init(sequelize);
    PropertySearch.init(sequelize);
    City.init(sequelize);
    State.init(sequelize);
    District.init(sequelize);

    Property.associate(sequelize.models);
    PropertyType.associate(sequelize.models);
    Realestate.associate(sequelize.models);
    Picture.associate(sequelize.models);
    Agent.associate(sequelize.models);
    Client.associate(sequelize.models);
    PropertyLocation.associate(sequelize.models);
    PropertySearch.associate(sequelize.models);
    City.associate(sequelize.models);
    State.associate(sequelize.models);
    District.associate(sequelize.models);

    return sequelize;
  }
}

export default DB;
