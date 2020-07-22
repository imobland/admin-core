<?php

	require_once solution\framework."domain/base_entity.php";

	class Property  extends base_entity
	{

		const primary_key 				= "property_id";

		public $property_id				;
		public $realestate_id			;
		public $user_id					;
		public $parent_property_id		;
		public $land_id					;
		public $type_id					;
		public $operation_id			;
		public $client_id				;
		public $agent_id				;
		public $objective_id			;
		public $reference				;
		public $price					;
		public $title					;
		public $published				;
		public $display_homepage		;
		public $display_address			;
		public $private_exclusive		;
		public $private_authorized		;
		public $private_observations	;
		public $video_url				;
		public $description				;
		public $isnew					;
		public $insert_date				;
		public $date_featured 			;
		public $last_modified			;
		public $data					;
		public $migrated				;
		public $alert					;
		public $migration_id			;
		public $keywords			    ;

		public $youtube_link			;
		public $tour360_link			;
		public $pictures_ready			;
		public $token					;
		public $location_embed			;
		public $friendly_url			;
	}

	require_once solution\services\entity."property_entity_service.php";
