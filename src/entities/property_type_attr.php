<?php

	require_once solution\framework."domain/base_entity.php";

	class property_type_attr  extends base_entity
	{
		
		const primary_key 				= "property_type_attr_id";
		
		public $property_type_attr_id	;

		public $name 					;

		public $required 				;

		public $allowed_categories 		;

		public $group 					;
		
		public $type 					;
		
		public $label 					;

		public $options=array()			;

		public $classes					;
	}

	//require_once solution\services\entity."property_type_attr_entity_service.php";
