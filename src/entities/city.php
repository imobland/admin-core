<?php

	require_once solution\framework."domain/base_entity.php";

	class city  extends base_entity
	{
	
		const primary_key 			= "city_id";
		
		public $city_id				;

		public $state_id			;

		public $country				;

		public $name				;
		
		//--------------------------------

		public $districts			;

		public $state_name			;
		
		public $state_acronym		;
	}