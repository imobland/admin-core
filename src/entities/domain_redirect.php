<?php

	require_once solution\framework."domain/base_entity.php";

	class domain_redirect  extends base_entity
	{
		
		const primary_key 			= "domain_redirect_id";
				
		public $domain_redirect_id	;
		
		public $realestate_id 		;

		public $property_id 		;
		
		public $user_id				;
		
		public $from				;
		
		public $to					;

		public $insert_date 		;
	}

