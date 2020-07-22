<?php

require_once solution\framework . "domain/base_entity.php";

class Client extends base_entity
{

    const primary_key = "client_id";

    public $client_id;

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

    public $picture_id;

    public $picture_src;

    /*------------------------------------------------------------------------*/

    public $fields = [];
}
