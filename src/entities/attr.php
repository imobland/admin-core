<?php

	require_once solution\framework."domain/base_entity.php";

	class attr  extends base_entity
	{
		
		const primary_key 				= "attr_id";
		
		public $attr_id	;
		
		public $name 	;

		public $type	;
		
	}


