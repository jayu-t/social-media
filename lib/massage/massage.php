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
$id = 1;
for ($i=0; $i < 20; $i++) {
$badgeId = 'num-msg-badge'.$i;
$onlineUserId = '917295953'.$id;
echo "<div class='massage-modal-content border-bottom border-dark hover-arrow' data-dismiss='modal' onclick='displayMassageBox(".'"'.$onlineUserId.'"'.", ".'"num-msg-badge'.$id.'"'.")'>
	    <div class='modal-img'>
		  <img src='nikki.png' alt='nikki' class='img-fluid rounded-circle ml-2'>
	    </div>
	    <div class='modal-msg'>
		  <div msg-sender-name>
			<span class='pl-3'>Jayesh Tajane</span>
		  </div>
		  <div class='msg-text'>
			<span class='pl-3'>Hello</span>
		  </div>
	    </div>
	    <div class='msg-badge pl-5' id='num-msg-badge".$id."'>
			<span class='badge badge-light'>".getNumUnreadMassage($onlineUserId)."</span>
	    </div>
	  </div>";

$id = $id + 1;
}

function getNumUnreadMassage($onlineUserId)
{
	return 10;
}

?>