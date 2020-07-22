<?php

require_once solution\framework . "domain/base_entity.php";

class Agent extends base_entity
{

    const primary_key = "agent_id";

    public $agent_id;

    public $realestate_id;

    public $user_id;

    public $name;

    public $email;

    public $phone;

    public $country;

    public $register_id;

    public $date_birth;

    public $date_created;

    public $last_modified;

}
