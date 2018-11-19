<?php
session_start(); 
if (isset($_POST['login']))
{
	$mobile=$_POST ['session'];
	$_SESSION['userid'] = $mobile;
	
  	header ('location: index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
	<form action="login.php" method="post">
		<input type="text" name="session">
		<input type="submit" value="login" name="login">
	</form>
</body>
</html>