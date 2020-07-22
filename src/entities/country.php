<?php

	require_once solution\framework."domain/base_entity.php";

	class country  extends base_entity
	{
	
		const primary_key 		= "country_id";
		
		public $country_id		;

		public $name			;

		public $acronym			;

		public $language_id		;
	}