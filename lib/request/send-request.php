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
session_start();
$userid = $_SESSION['userid'];
$id = $_GET['userid'];

//	This statement can get users from database for comparing the id's
$query = "insert into request(sender_id, reciever_id) values ('$userid', '$id')";
$result = mysqli_query($connect, $query)or die(mysqli_error($connect));
if ($result) 
{
	echo "1";
}
else
{
	echo "0";
}
?>