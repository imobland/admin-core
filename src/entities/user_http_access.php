<?php

	require_once solution\framework."domain/base_entity.php";

	class user_http_access  extends base_entity
	{
		const primary_key 			= "user_http_access_id";
		
		public $user_http_access_id		;
		
		public $ip						;
		
		public $request_uri				;
		
		public $host 					;
		
		public $http_referer 			;
		
		public $port 					;
		
		public $request_time 			;
		
		public $http_accept_language 	;
		
		public $gateway_interface 		;
		
		public $server_protocol 		;
		
		public $http_from 				;
		
		public $insert_date 			;

		public $user_agent 				;
		
		public $domain					;
		
		public $request_method			;

		public $http_host				;

		public $http_accept				;
	}
	