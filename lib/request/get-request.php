<?php
include '../connection.php';
/*
validate_user();
$connect = mysqli_connect('localhost', 'root', '', 'test');

function validate_user() {
    if(!isset($_SESSION['userid']))
        header('location: ../../login.php');
}
*/

for ($i=0; $i < 20; $i++) { 
echo "<div class='request-modal-content border-bottom border-dark' id='r$i'>
	    <div class='modal-img'>
		  <img src='nikki.png' alt='nikki' class='img-fluid rounded-circle ml-2'>
		  <span class='pl-3'>Jayesh Tajane</span>    
	    </div>
	    <div class='modal-btn'>
	      <a href='#' class='btn btn-sm btn-primary' type='button' onclick='acceptRequest(r$i)'>Accept</a>
	      <a href='#' class='btn btn-sm btn-primary ml-2' type='button'onclick='deleteRequest(r$i)' >Delete</a>
	    </div>
	  </div>";
}
?>