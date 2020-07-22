<?php

	require_once solution\framework."domain/base_entity.php";

	class Realestate  extends base_entity
	{

		const primary_key 			= "realestate_id";

		public $realestate_id				;

		public $name 						;

		public $email 						;

		public $domain 						;

		public $subdomain 					;

		public $nickname 					;

		public $date_created 				;

		public $last_modified				;

		public $address						;

		public $picture_application_token	;

		public $picture_application_id		;

		//---------------------------

		public $country_id					;

		public $state_id					;

		public $city_id						;

		public $district_id					;

		public $postalcode					;

		public $latitude					;

		public $longitude					;

		public $preferences					;

		public $use_friendly_url					;

		public $config;
	}

	require_once solution\services\entity."realestate_entity_service.php";
