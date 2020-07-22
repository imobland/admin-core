<?php

	require_once solution\framework."domain/base_entity.php";

	class User  extends base_entity
	{
		
		const primary_key 			= "user_id";
		
		public $user_id				;
		
		public $name 				;
		
		public $email 				;

		public $password 			;

		public $cpf 				;
	
		public $rg 					;
		
		public $active	 			;

		public $date_birth	 		;

		public $date_created 		;

		public $sex 				;

		//--------------------------

		public $key 				;

		public $insert_date	 		;
		
	}
	
	require_once solution\services\entity."user_entity_service.php";