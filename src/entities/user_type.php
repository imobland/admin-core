<?php

	require_once solution\framework."domain/base_entity.php";


	class User_type  extends base_entity
	{
		
		const primary_key 			= "user_type_id";
		
		public $user_type_id		;

		public $realestate_id		;
		
		public $name 				;

		public $key 				;

		public $permissions	 		;

		public $insert_date	 		;
		
	}
	
	//require_once solution\services\entity."user_type_entity_service.php";