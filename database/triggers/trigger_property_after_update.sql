CREATE DEFINER=`imobland_user`@`%` TRIGGER trigger_property_after_update
	AFTER UPDATE ON property
	FOR EACH ROW BEGIN
		
    	IF(@disable_property_validation IS NULL) THEN    
			
            CALL property_outdate(OLD.property_id);
			
            UPDATE property_registry r SET r.similar=0 WHERE r.realestate_id=OLD.realestate_id;
    
	    END IF;
		
    END