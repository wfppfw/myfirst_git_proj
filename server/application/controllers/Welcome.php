<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

  //  function __construct() {  
  //               parent::__construct();         
  //       }  
	public function index()
	{
		// $this->load->view('welcome_message');
    echo 'hello,CI';
	}

  // public function matching(){
  //       		$one_word =  $this->uri->segment(3);
  //       		$query = $this->db->query("SELECT * FROM `first` WHERE `name` LIKE "+$one_word);
  //       		$query = $query->result();
  //       		$this->output->set_header('Content-Type: application/json; charset=utf-8');
	// 			    echo json_encode($query);
  //       }
}
