<?php

	require_once solution\framework."domain/base_entity.php";

	class connection_property_word  extends base_entity
	{
		
		const primary_key 			= "property_id";
		
		const secondary_key 		= "word_id";
		
		public $property_id			;
		
		public $word_id 			;

		public $insert_date 		;
	}

