<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;
use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB

class Tt extends CI_Controller {
   

    public function index($id) { 
      $product_id = $this->uri->segment(3, 0);
      $xname = urldecode($product_id);
      preg_match_all("/./u", $xname, $arr);
      if(strlen($xname)<=3){
      $row = DB::select('first',['*'],array('name'=>$xname));
       if($row===[])
      {
            $row = DB::select('first',['*'],array('id'=>'2507'));
      }

      echo json_encode($row,JSON_UNESCAPED_UNICODE);
      }
      else{
        $row = DB::select('second',['*'],array('name'=>$xname));
        if($row!=[]){
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
        }
        if($row === [])
        {
          $row1 = DB::select('first',['*'],array('name'=>$arr[0][0]));
      
          
          $row2 = DB::select('first',['*'],array('name'=>$arr[0][1]));
          
          $row[0]=$row1[0];
          $row[1]=$row2[0];  
          echo json_encode($row,JSON_UNESCAPED_UNICODE);
        }
      } 
      
      
    }


}