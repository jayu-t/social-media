<?php 
$id = 1;
for ($i=0; $i < 20; $i++) { 
$onlineUserId = '917295953'.$id;
echo "<div class='online-modal-content border-bottom border-dark hover-arrow' onclick='displayMassageBox(".'"'.$onlineUserId.'"'.")'>
	    <div class='modal-img'>
		  <img src='nikki.png' alt='nikki' class='img-fluid rounded-circle ml-2'>
		  <span class='pl-3'>Jayesh Tajane</span>    
	    </div>
	  </div>";
$id = $id + 1;
}
?>