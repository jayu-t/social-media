<?php
session_start();

include '../connection.php';
/*
validate_user();
$connect = mysqli_connect('localhost', 'root', '', 'test');

function validate_user() {
    if(!isset($_SESSION['userid']))
        header('location: ../../login.php');
}
*/
$msgBox = $_SESSION["msg-box"];
$newMsg = $_SESSION["new-msg"];
$msgBoxBody = $_SESSION['msg-box-body'];

$userid = $_GET['userid'];
$mainUser = $_SESSION['userid'];


$query = "
	SELECT * FROM massages
	WHERE sender = '$userid' and reciever = '$mainUser' or sender = '$mainUser' and reciever = '$userid' 
	";

$result = mysqli_query($connect, $query);
$num = mysqli_num_rows($result);
if ($num) {
	while ($row = mysqli_fetch_array($result)) {
		if ($num == 1) {
			if ($mainUser == $row['sender']) {
				echo '<div class="msg send-msg" id="new-msg-'.$newMsg.'">
						<span>'.$row['massage'].'</span>
		  		  	  </div>';
			}
			else {
				echo '<div class="msg recieve-msg" id="new-msg-'.$newMsg.'">
						<span>'.$row['massage'].'</span>
		  		  	  </div>';
			}
		}
		else {
			if ($mainUser == $row['sender']) {
				echo '<div class="msg send-msg ">
						<span>'.$row['massage'].'</span>
		  		  	  </div>';
			}
			else {
				echo '<div class="msg recieve-msg ">
						<span>'.$row['massage'].'</span>
		  		  	  </div>';
			}
		}
		$num--;
	}
}
/*
$query = "
	UPDATE massages
	SET status='seen'
	WHERE sender = '$userid' and reciever = '$mainUser' and status='unseen'
	";

$result = mysqli_query($connect, $query);


echo '<div class="msg send-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
	 	<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
		<span>Lorem ipsum dolor sit amet.</span>
      </div>
	  <div class="msg send-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg send-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg recieve-msg">
		<span>Lorem ipsum dolor sit amet.</span>
	  </div>
	  <div class="msg send-msg" id="new-msg-'.$newMsg.'">
		<span>This is last massage.</span>
	  </div>';
*/
echo '<script>
		$("#msg-box'.$msgBox.', #msg-box-body'.$msgBoxBody.'").animate({
    		scrollTop: $("#new-msg-'.$newMsg.'").offset().top
		},1);
	  </script>';

$_SESSION['msg-box'] = $msgBox + 1;
$_SESSION['new-msg'] = $newMsg + 1;
$_SESSION['msg-box-body'] = $msgBoxBody + 1;

/*echo '<script>
		alert('.$_SESSION['msg-box'].');
		alert('.$_SESSION['msg-box-body'].');
		alert('.$_SESSION['new-msg'].');
	  </script>';*/
?>