CREATE DEFINER=`imobland_user`@`%` TRIGGER trigger_property_before_delete
    BEFORE DELETE ON property
    FOR EACH ROW BEGIN
         
        SET SQL_SAFE_UPDATES = 0;

        CALL property_unbind_childs(OLD.property_id);
        
        DELETE FROM property_paternities 		WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1; 
        
        DELETE FROM property_search 			WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1;
        
        DELETE FROM property_view 				WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1;        
        
        DELETE FROM connection_property_word 	WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1;
        
        DELETE FROM property_location 			WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1; 
        
        DELETE FROM property_registry			WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 1; 
        
        DELETE FROM property_attr 	 			WHERE property_id = OLD.property_id AND realestate_id = OLD.realestate_id LIMIT 300; 
		
        SET SQL_SAFE_UPDATES = 1;
        
    END