 <?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB
	
	class Danci extends CI_Controller {  
        // 构造方法  
        function __construct() {  
                parent::__construct();  
                $this->load->model('word_model');
        }  
        
       
        function juzi($id)
        {

        
          $number = 0;
          $sentence =array();
          $num = 0;
          $begin = 0;
          $product_id = $this->uri->segment(3, 0);
          $xname = urldecode($product_id);
          preg_match_all("/./u", $xname, $arr);
          while(($begin+1)<=count($arr[0]))
          {
                // if($begin==count($arr[0])-1)
                // {
                //   $row = DB::select('first',['*'],array('name'=>$arr[0][$begin]));
                //    $sentence[$number] = $row[0];
                //    $number += 1;
                //    $begin += 1;
                // }
                if($begin>=count($arr[0])-1)
                {
                    $num = 1;
                  $row = DB::select('first',['*'],array('name'=>$arr[0][$begin]));
                   
                   if($row===[])
                   {
                     $row = DB::select('first',['*'],array('id'=>'2507'));
                   }
                   $sentence[$number] = $row[0];
                   $number += 1;
                   $begin += 1;
                    break;
                }else{
                $result = $this->word_model->two($arr[0][$begin],$arr[0][$begin+1]);
                }
                if($result==1)
                {
                   $liang = $arr[0][$begin].$arr[0][$begin+1];
                   $row = DB::select('second',['*'],array('name'=>$liang));
                   $sentence[$number] = $row[0];
                   $number += 1;
                   $begin = $begin+2;
                   
                }
               else{
                   $row = DB::select('first',['*'],array('name'=>$arr[0][$begin]));
                   if($row===[])
                   {
                     $row = DB::select('first',['*'],array('id'=>'2507'));
                   }
                   $sentence[$number] = $row[0];
                   $number += 1;
                   $begin += 1;
                  
                }
              
          }
          

          echo json_encode($sentence,JSON_UNESCAPED_UNICODE);
          
        }
  }

        
