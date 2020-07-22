<?php

	require_once solution\framework."domain/base_entity.php";

	class State  extends base_entity
	{
		const primary_key 			= "state_id";
		
		public $state_id			;

		public $country				;

		public $name				;

		public $abbreviations		;
	}