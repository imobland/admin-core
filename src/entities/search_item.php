<?php

	require_once solution\framework."domain/base_entity.php";

	class search_item  extends base_entity
	{
		
		const primary_key 			= "search_item_id";

		public $search_item_id		;
		
		public $realestate_id		;
		
		public $type				;
		
		public $primary				;
		
		public $title				;
		
		public $content				;
		
		public $arguments			;

		public $tags				;
		
		public $img					;
		
		public $picture_id			;

		public $link				;

		public $insert_date			;
	}

	require_once solution\services\entity."search_item_entity_service.php";
