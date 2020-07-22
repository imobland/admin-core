<?php

	require_once solution\framework."domain/base_entity.php";

	class Property_attr  extends base_entity
	{
		
		const primary_key 				= "property_attr_id";
		
		public $property_attr_id		;

		public $realestate_id			;
		
		public $user_id					;
		
		public $property_type_id		;

		public $value					;

		public $date_created			;

	}


