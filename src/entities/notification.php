<?php

	require_once solution\framework."domain/base_entity.php";

	class notification  extends base_entity
	{
		const primary_key 		= "notification_id";
		

		public $notification_id		;

		public $type				;

		public $label				;

		public $link				;

		public $action				;

		public $picture				;

		public $insert_date			;

		//---------------------------

		public $user_id				;
		
		public $isnew				;

	}

	require_once solution\services\entity."notification_entity_service.php";