<?php

	require_once solution\framework."domain/base_entity.php";

	class property_word  extends base_entity
	{
		const primary_key 				= "property_id";
		
		public $property_word_id		;
		public $name					;
		public $insert_date				;
	}

	//require_once solution\services\entity."property_search_word_entity_service.php";

	