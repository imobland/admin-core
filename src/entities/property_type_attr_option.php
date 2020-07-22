<?php

	require_once solution\framework."domain/base_entity.php";

	class property_type_attr_option  extends base_entity
	{
		
		const primary_key = "property_type_attr_option_id";
		
		public $property_type_attr_option_id;
		
		public $property_type_attr_id	;
		
		public $label 					;

		public $value 					;

		public $insert_date 			;
	
	}