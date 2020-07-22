<?php

	require_once solution\framework."domain/base_entity.php";

	class Property_type_paternities  extends base_entity
	{
		
		const primary_key 			= "property_type_id";
		
		const secondary_key 		= "child_id";
		
		public $property_type_id	;

		public $child_id			;
		
		public $anotations			;

		public $date_created		;
	}

