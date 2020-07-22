<?php

	require_once solution\framework."domain/base_entity.php";

	class property_type_attr_connection extends base_entity
	{
		
		const primary_key 				= "property_type_attr_id";

		const secondary_key 			= "property_type_id";

		public $property_type_attr_id	;

		public $property_type_id		;

		public $is_required				;
	}

	//require_once solution\services\entity."property_type_attr_entity_service.php";
