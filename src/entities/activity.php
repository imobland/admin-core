<?php

require_once solution\framework . "domain/base_entity.php";

class activity extends base_entity
{

    const primary_key = "activity_id";

    public $activity_id;

    public $user_id;

    public $key;

    public $realestate_id;

    public $client_id;

    public $property_id;

    public $name;

    public $arguments;

    public $activity_date;

    public $insert_date;
}

require_once solution\services\entity . "activity_entity_service.php";
