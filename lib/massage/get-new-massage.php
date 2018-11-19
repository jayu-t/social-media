<?php 
session_start();
$userid = $_GET['userid'];
$mainUser = $_SESSION['userid'];

$connect = mysqli_connect('localhost', 'root', '');
mysqli_select_db($connect, 'test');

$query = "
	SELECT * FROM massages
	WHERE sender = '$userid' and reciever = '$mainUser' and status='unseen'
	";

$result = mysqli_query($connect, $query);
$num = mysqli_num_rows($result);
//echo "num rows = $num";
while ($row = mysqli_fetch_array($result)) {
	echo '<div class="msg recieve-msg ">
		<span>'.$row['massage'].'</span>
	  </div>';

	$query = "
	UPDATE massages
	SET status='seen'
	WHERE id = '".$row['id']."'
	";

	$r = mysqli_query($connect, $query);
	//echo "update = $r";
}

/*
echo '<div class="msg send-msg ">
		<span>This is new massage</span>
	  </div>';

echo '<div class="msg recieve-msg ">
		<span>This is new massage</span>
	  </div>';
*/
?>