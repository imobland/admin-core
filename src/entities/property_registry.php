<?php

	require_once solution\framework."domain/base_entity.php";

	class property_registry  extends base_entity
	{
		
		const primary_key 			= "property_id";
		
		public $property_id			;
		
		public $realestate_id	 	;

		public $user_id				;
		
		public $search				;
		
		public $view				;

	}
