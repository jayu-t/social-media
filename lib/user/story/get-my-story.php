<?php
/*
echo "<div id='s$i'>
			<div id='my-story-image'>jay.jpg</div>
			<div id='desc$i'>Hi i'm jayesh Tajane</div>
			<div id='name$i'>Jayesh Tajane</div>
		 <div>";
*/

/**
 * 
 */
class Story
{
	var $storyImage;
	var $desc;
}

$myObj = new Story;
$myObj->storyImage = "jay.jpg";
$myObj->desc = "Hi i'm jayesh Tajane";

$myJSON = json_encode($myObj);

echo $myJSON;
?>