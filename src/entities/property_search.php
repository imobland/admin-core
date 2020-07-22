<?php

	require_once solution\framework."domain/base_entity.php";

	class Property_search  extends base_entity
	{
		
		const primary_key 				= "property_id";
		
		public $property_id				;
		public $realestate_id			;
		public $user_id					;
		public $words					;
		public $description				;
		public $published				;
		public $highlighted				;
		public $reference				;
		public $operation_id			;
		public $price					;
		public $type_id					;
		public $city_id					;
		public $district_id				;
		public $state_id				;
		public $lat						;
		public $lon						;
		public $last_modified			;
		public $date_created			;
		public $__date_cached			;

	}

	//require_once solution\services\entity."property_search_entity_service.php";

	