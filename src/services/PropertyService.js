import { Property } from "../models";

export default class PropertyService {
  //
  static async getByID(id) {
    return await Property.findByPk(id);
  }
  
  static async getEntityTags(id) {
    // return await Property.findByPk(id);

    // DECLARE ref, type, operation, objective, price, alert VARCHAR(50);
    // DECLARE type_id, operation_id, highlighted, published, objective_id INT;

    // SELECT 
    //     p.reference, 
    //     p.type_id, 
    //     p.operation_id,
    //     if(p.date_featured>'00-00-00', 1, 0),
    //     p.published,
    //     p.objective_id,
    //     IF(p.price>0, '', 'no-price'),
    //     p.alert
    // INTO 
    //     ref, 
    //     type_id, 
    //     operation_id,
    //     highlighted,
    //     published,
    //     objective_id,
    //     price,
    //     alert
    
    // FROM property p WHERE property_id=id LIMIT 1;

    // SET type = (SELECT tags FROM property_type WHERE property_type_id=type_id LIMIT 1);

    // SET operation = CASE operation_id WHEN 1 THEN 'sale' WHEN 2 THEN 'rent' WHEN 3 THEN 'season' END;
    
    // SET objective = CASE objective_id WHEN 1 THEN 'residential' WHEN 2 THEN 'commercial' WHEN 3 THEN 'industrial' WHEN 4 THEN 'rural' END;
    
    // RETURN LCASE(translit_utf8(CONCAT(
    //     IF(type IS NOT NULL,    type, ''),' ',
    //     IF(operation IS NOT NULL ,      operation, 'no-operation'),' ',
    //     IF(objective IS NOT NULL ,      objective, 'no-objective'),' ',
    //     IF(highlighted=1,       'highlighted ', ''),
    //     IF(published=1,         'published ',''),
    //     price,' ',
    //     IF(alert IS NOT NULL AND alert <> '', 'alert ', '')
    // )));
  }
}
