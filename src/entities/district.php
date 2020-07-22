<?php

	require_once solution\framework."domain/base_entity.php";

	class district  extends base_entity
	{
	
		const primary_key 		= "district_id";
		
		public $district_id		;

		public $state_id		;

		public $city_id			;

		public $country			;

		public $name			;

		public $insert_date		;
		
		//--------------------------------------

		public $city_name		;

		public $state_name		;

		public $state_acronym	;

		public $total_properties;

	}