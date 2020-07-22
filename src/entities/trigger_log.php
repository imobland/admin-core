<?php

	require_once solution\framework."domain/base_entity.php";

	class Trigger_log extends base_entity
	{
		
		const primary_key 			= "trigger_log_id";
		
		public $trigger_log_id		;

		public $trigger_id			;
		
		public $realestate_id		;

		public $property_id			;
		
		public $url 				;
		
		public $response_code 		;

		public $response_body 		;

		public $insert_date			;
		
	}