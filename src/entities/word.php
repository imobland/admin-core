<?php

	require_once solution\framework."domain/base_entity.php";

	class word  extends base_entity
	{
		
		const primary_key 			= "word_id";
				
		public $word_id				;
		
		public $label 				;

		public $insert_date 		;
	}

