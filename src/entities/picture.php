<?php

require_once solution\framework . "domain/base_entity.php";

class picture extends base_entity
{

    const primary_key = "picture_id";

    public $picture_id;

    public $realestate_id;

    public $user_id;

    public $property_id;

    public $title;

    public $name;

    public $extension;

    public $size;

    public $date_created;

    public $display;

    public $position;

    public $thumb;

    public $colors;

    public $type;

    public $src;

    public $path;

    public $version;
}

require_once solution\services\entity . "picture_entity_service.php";
