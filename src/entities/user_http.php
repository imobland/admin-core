<?php

	require_once solution\framework."domain/base_entity.php";

	class user_http  extends base_entity
	{
		
		const primary_key 			= "ip";
		
		public $ip					;
		
		public $permissions			;
		
		public $date 				;
		
	}
	
	//require_once solution\services\entity."user_http_entity_service.php";