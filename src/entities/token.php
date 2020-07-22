<?php

	require_once solution\framework."domain/base_entity.php";
	
	class token  extends base_entity
	{
		
		const primary_key 			= "key";
		
		public $key 				;
		
		public $data				;

		public $valid_time			;

		public $insert_date			;

	}