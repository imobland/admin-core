<?php

	require_once solution\framework."domain/base_entity.php";

	class connection_realestate_user  extends base_entity
	{
		
		const primary_key 			= "realestate_id";
		
		const secondary_key 		= "user_id";
		
		public $realestate_id		;
		
		public $user_id 			;

		public $date_created 		;
		
	}

