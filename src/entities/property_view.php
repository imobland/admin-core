<?php

	require_once solution\framework."domain/base_entity.php";

	class Property_view  extends base_entity
	{
		const primary_key 				= "property_id";

		public $property_id;
		public $realestate_id;
		public $user_id;

		public $operation_id;
		public $objective_id;
		public $category_id;
		public $title;
		public $reference;
		public $price;
		public $type;
		public $realestate;
		public $location;
		public $attributes;
		public $agent;
		public $description;
		public $display_url;
		public $display_thumb;
		public $display_colors;
		public $tags;
		public $date_created;
		public $date_featured;
		public $last_modified;
		public $__date_cached;
		public $youtube_link;
		public $keywords;
		public $picture_path;
		public $friendly_url;

	}

	require_once solution\services\entity."property_view_entity_service.php";
