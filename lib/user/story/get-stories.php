<?php 
/*
for ($i=0; $i < 10; $i++) { 
	echo '<div class="post-header border-bottom border-dark">
			<img src="nikki.png" alt="nikki" class="img-fluid rounded-circle ml-2">
			<h5 class="ml-4">Jayesh Tajane</h5>
		</div>';
}
*/
echo '<div id="total">10</div>';
echo '<div>';
for ($i=0; $i < 10 ; $i++) { 
	if ($i==1) {
		echo "<div id='s$i'>
			<div id='img$i'>jay.jpg</div>
			<div id='desc$i'>Hi this is my siso 222222222222</div>
			<div id='name$i'>Jayesh Tajane</div>
		 <div>";
	}
	echo "<div id='s$i'>
			<div id='img$i'>nikki.png</div>
			<div id='desc$i'>Hi this is my siso</div>
			<div id='name$i'>Jayesh Tajane</div>
		 <div>";
}
echo '</div>';
?>