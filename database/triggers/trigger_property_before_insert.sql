CREATE DEFINER=`imobland_user`@`%` TRIGGER trigger_property_before_insert
  BEFORE INSERT ON property
  FOR EACH ROW 
    BEGIN
    
      SET NEW.insert_date = NOW();
      
      IF (NOT NEW.type_id > 0) THEN SET NEW.type_id = 1; END IF;
      
      IF (NOT NEW.operation_id > 0) THEN SET NEW.operation_id = 1; END IF;
      
      IF (NOT NEW.objective_id > 0) THEN SET NEW.objective_id = 1; END IF;
      
  IF (NOT NEW.realestate_id > 0) THEN 
    CALL EXCEPTION('realestate_id is required to insert a new property');  
  ELSE 
    IF(NOT EXISTS(SELECT realestate_id FROM realestate WHERE realestate_id=NEW.realestate_id)) THEN
              CALL EXCEPTION('realestate must be existent to insert a new property');
    END IF; 
      END IF;
      
      IF (NOT NEW.user_id > 0) 
      THEN 
    CALL EXCEPTION('user_id is required to insert a new property');  
  ELSE 
    IF(NOT EXISTS(SELECT user_id FROM user WHERE user_id=NEW.user_id)) 
          THEN
      CALL EXCEPTION('user must be existent to insert a new property');
    END IF;
  END IF;
  
END