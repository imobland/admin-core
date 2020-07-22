<?php

	require_once solution\framework."domain/base_entity.php";

	class integration  extends base_entity
	{
		
		const  primary_key 			= "integration_id";
		
		public $integration_id		;
		
		public $name 				;
		
		public $nickname			;
		
		public $key 				;

		public $insert_date 		;

		public $image_data	 		;
	}