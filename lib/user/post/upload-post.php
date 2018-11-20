<?php 
include '../../connection.php';
/*
validate_user();
$connect = mysqli_connect('localhost', 'root', '', 'test');

function validate_user() {
    if(!isset($_SESSION['userid']))
        header('location: ../../login.php');
}
*/

print_r($_FILES);
echo "<br>";
echo $_POST['postText'];
?>