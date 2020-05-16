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

$massage = $_GET['msg'];
$userid = $_GET['userid'];
echo '<div class="msg send-msg">';
echo "<span>msg = $massage<br> id = $userid</span>
	  </div>";
?>