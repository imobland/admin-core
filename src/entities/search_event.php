<?php

	require_once solution\framework."domain/base_entity.php";

	class search_event  extends base_entity
	{
		
		const primary_key 				= "search_event_id";

		public $search_event_id			;
		
		public $realestate_id			;
		
		public $action					;
		
		public $arguments				;
		
		public $status					;

		public $insert_date				;
	}

	require_once solution\services\entity."search_event_entity_service.php";