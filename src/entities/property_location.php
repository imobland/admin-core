<?php

require_once solution\framework . "domain/base_entity.php";

class property_location extends base_entity
{

    const primary_key = "property_id";

    public $property_id;

    public $realestate_id;

    public $user_id;

    public $country;

    public $country_id;

    public $state;

    public $state_id;

    public $city;

    public $city_id;

    public $district;

    public $district_id;

    public $cep;

    public $street;

    public $number;

    public $complement;

    public $date_created;

    public $area;

    public $lat;

    public $lon;

    public $last_modified;
}

require_once solution\services\entity . "property_location_entity_service.php";
