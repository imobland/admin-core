<?php

	require_once solution\framework."domain/base_entity.php";

	class Trigger extends base_entity
	{
		
		const primary_key 		= 'trigger_id';
	
		public $trigger_id		;
		public $key				;
		public $type			;
		public $arguments		;
		public $data			;
		public $insert_date		;
		
	}