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
$query = "delete from request where sender_id='$userid' and reciever_id='$id' ";
$result = mysqli_query($connect, $query);
if ($result) 
{
	echo "1";
}
else
{
	echo "0";
}
?>