<?php
function createUserId($length=5)  
{
	$random = ""; srand((double) microtime() * 1000000);
 	$data = "A0B1C2DE3FG4HIJ5KLM6NOP7QR8ST9UVW0XYZqwertyuioplkjhgfdsazxcvbnm"; 
 	for ($i = 0; $i < $length; $i++) 
 	{ 
 		$random .= substr($data, (rand() % (strlen($data))), 1);
  	}  
  	return $random; 
}

function createFriendListId($uid, $friendId, $length=5)  
{
	$random = ""; srand((double) microtime() * 1000000);
 	$data = "A0B1C2DE3FG4HIJ5KLM6NOP7QR8ST9UVW0XYZqwertyuioplkjhgfdsazxcvbnm"; 
 	for ($i = 0; $i < $length; $i++) 
 	{ 
 		$random .= substr($data, (rand() % (strlen($data))), 1);
  	}
  	$d = date("Y-m-d")."_".date("h:i:sa");
  	return "fnd-list".$d.$random; 
}
?>