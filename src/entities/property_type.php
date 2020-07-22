<?php

	require_once solution\framework."domain/base_entity.php";

	class Property_type  extends base_entity
	{
		
		const primary_key 			= "property_type_id";
		
		public $property_type_id	;
		
		public $paternity_required 	;

		public $name 				;
		
		public $attributes 			;
		
		public $category 			;
		
		public $address 			;
	}

	require_once solution\services\entity."property_type_entity_service.php";
