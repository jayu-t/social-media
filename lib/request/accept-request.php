<?php
include '../connection.php';
include '../id-generator.php';

session_start();
$userid = $_SESSION['userid'];
$id = $_GET['userid'];

//	This statement can get users from database for comparing the id's
$query = "delete from request where sender_id='$id' and reciever_id='$userid' ";
$result = mysqli_query($connect, $query) or die('what wrong 1');
$fndId = createFriendListId($userid, $id);
$query = "insert into friend_list(id, friend1, friend2) values ('$fndId', '$userid', '$id')";
$result = mysqli_query($connect, $query) or die('what wrong 2');
if ($result) 
{
	echo "1";
}
else
{
	echo "0";
}
?>