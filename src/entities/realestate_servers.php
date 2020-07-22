<?php

require_once solution\framework . "domain/base_entity.php";

class realestate_servers extends base_entity
{

    const primary_key = "realestate_id";

    public $realestate_id;

    public $picture;

    public $template;

    public $integrator;

    public $created_at;

}
