<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
  use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
  use QCloud_WeApp_SDK\Constants as Constants;
  use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB
	
	class Suiji extends CI_Controller {  
        // 构造方法  
        function __construct() {  
                parent::__construct();   
        }  
          
        // 默认方法  
        public function index($id1,$id2,$id3,$id4) { 
         
          $row1 = DB::select('second',['*'],array('id'=>$id1));
          $row2 = DB::select('second',['*'],array('id'=>$id2));
          $row3 = DB::select('second',['*'],array('id'=>$id3));
          $row4 = DB::select('second',['*'],array('id'=>$id4));
          $row5 = [$row1[0],$row2[0],$row3[0],$row4[0]];
          echo json_encode($row5,JSON_UNESCAPED_UNICODE);      
        }  
  }

