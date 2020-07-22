<?php

	require_once solution\framework."domain/base_entity.php";

	class post  extends base_entity
	{
	
		const primary_key 			= "post_id";
		
		public $post_id				;

		public $user_id				;

		public $title				;

		public $content				;
		
		public $tags				;
		
		public $banner				;
		
		public $url					;
		
		public $insert_date			;
		
	}