<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
  use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
  use QCloud_WeApp_SDK\Constants as Constants;
  use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB
	
	class Calculate extends CI_Controller {  
        // 构造方法  
        function __construct() {  
                parent::__construct();   
        }  
          
        // 默认方法  
        public function index($wenben) {  
          $wenben = urldecode($wenben);
          $data = array('wenben'=>$wenben);
          $row=DB::insert('opinoin', $data);
                 
        }  



          
          
        
}  