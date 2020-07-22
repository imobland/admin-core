<?php

	require_once solution\framework."domain/base_entity.php";

	class event  extends base_entity
	{
		
		const  primary_key 			= "event_id";
		
		public $event_id		;
		
		public $key 			;

		public $type 			;

		public $data 			;

		public $insert_date 	;
	}