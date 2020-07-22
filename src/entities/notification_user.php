<?php

	require_once solution\framework."domain/base_entity.php";

	class notification_user  extends base_entity
	{
		const primary_key 		= "district_id";
		

		public $notification_id		;

		public $user_id				;

		public $isnew 				;
	}