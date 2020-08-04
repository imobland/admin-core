CREATE DEFINER=`imobland_user`@`%` TRIGGER trigger_property_after_insert
	AFTER INSERT ON property
	FOR EACH ROW BEGIN
		
		INSERT IGNORE INTO property_registry 	(property_id, realestate_id, user_id) VALUES (NEW.property_id, NEW.realestate_id, NEW.user_id);
		
		INSERT IGNORE INTO property_search 		(property_id, realestate_id, user_id) VALUES (NEW.property_id, NEW.realestate_id, NEW.user_id);
	
		INSERT IGNORE INTO property_view 		(property_id, realestate_id, user_id) VALUES (NEW.property_id, NEW.realestate_id, NEW.user_id);
		
		INSERT IGNORE INTO property_paternities (property_id, realestate_id, user_id) VALUES (NEW.property_id, NEW.realestate_id, NEW.user_id);
	
		INSERT IGNORE INTO property_location 	(property_id, realestate_id, user_id) VALUES (NEW.property_id, NEW.realestate_id, NEW.user_id);
        
    END