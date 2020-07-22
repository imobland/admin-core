<?php

	require_once solution\framework."domain/base_entity.php";

	class integration_realestate  extends base_entity
	{
		
		const  primary_key 			= "integration_id";
		const  secondary_key 		= "realestate_id";
		
		public $integration_id		;
		public $realestate_id		;

		public $active				;

		public $insert_date 		;
	}