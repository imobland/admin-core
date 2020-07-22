<?php

	require_once solution\framework."domain/base_entity.php";

	class realestate_user_permission extends base_entity
	{
		
		const primary_key 						= "realestate_user_permission_id";
		
		public $realestate_user_permission_id	;
		
		public $user_id							;
		
		public $realestate_id 					;
		
		public $name		 					;

		public $insert_date	 					;
		
	}
	
	//require_once solution\services\entity."realestate_user_entity_service.php";