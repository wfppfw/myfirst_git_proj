<?php  

	defined('BASEPATH') OR exit('No direct script access allowed');
	use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB
/** 
 * 判断两个相邻的字是否为一个词语 
 */  
class Word_model extends CI_Model {  
          
        function __construct() {  
                parent::__construct();  
        }  
          
        /* 
         * 判断函数
         */  
         function two($p1,$p2)
        {
          $p3=$p1.$p2;
          $row1 = DB::select('second',['*'],array('name'=>$p3));
          if($row1===[]){
              return 0;
          }else
          {
            return 1;
          }
        }
}
  
