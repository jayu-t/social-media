<?php
include '../connection.php';
include '../user-info.php';
session_start();

$userid = $_SESSION['userid'];

$query = "
	SELECT * FROM request where reciever_id = '$userid'
	";
$result = mysqli_query($connect, $query) or die("unalble to connect");
if (mysqli_num_rows($result)) 
{
	$i = 0;
	while($row = mysqli_fetch_array($result)) {
		$sender_id = $row['sender_id'];
		$username = getUserName($sender_id);
		echo "<div class='request-modal-content border-bottom border-dark' id='r$i' data-senderid='".$sender_id."'>
	    <div class='modal-img'>
		  <img src='nikki.png' alt='nikki' class='img-fluid rounded-circle ml-2'>
		  <span class='pl-3'>".$username['firstname']." ".$username['lastname']."</span>    
	    </div>
	    <div class='modal-btn'>
	      <a href='#' class='btn btn-sm btn-primary' type='button' onclick='acceptRequest(r$i)'>Accept</a>
	      <a href='#' class='btn btn-sm btn-primary ml-2' type='button'onclick='deleteRequest(r$i)' >Delete</a>
	    </div>
		</div>";
		$i += 1;
	}
}
else
{
	echo "No new request found";
}


?>