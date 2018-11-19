<?php 
echo '
<div class="post" id="post1" data-postid="post1">
	<div class="post-header">
		<img src="nikki.png" alt="nikki" class="img-fluid rounded-circle ml-2">
		<h5 class="ml-4">Jayesh Tajane</h5>
	</div>
	<div class="post-body">
		<div class="post-discription pl-2 pr-2 pt-2 pb-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cupiditate.
		</div>
		<div class="post-img">
			<img src="nikki.png" alt="img-fluid" class="h-10 center mt-1">
		</div>
	</div>
	<div class="post-footer">
		<div class="like border-right border-white bg-dark hover-thumb" onclick="like(\'post1\', this)"><span>20</span> Like</div>
		<div class="comment border-right border-white bg-dark hover-thumb" data-toggle="modal" data-target="#comment-modal" onclick="getPostComment(\'post1\')"><span>20</span> Comment</div>
		<div class="share bg-dark hover-thumb"><span>20</span> Share</div>
	</div>
</div>

<div class="mt-2"></div>

<div class="post" id="post2" data-postid="post2">
	<div class="post-header">
		<img src="nikki.png" alt="nikki" class="img-fluid rounded-circle ml-2">
		<h5 class="ml-4">Jayesh Tajane</h5>
	</div>
	<div class="post-body">
		<div class="post-discription pl-2 pr-2 pt-2 pb-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cupiditate.
		</div>
		<div class="post-img">
			<img src="nikki.png" alt="" class="img-fluid h-10 center">
		</div>
	</div>
	<div class="post-footer">
		<div class="like border-right border-white bg-dark hover-thumb" onclick="like(\'post2\', this)"><span>15</span> Like</div>
		<div class="comment border-right border-white bg-dark hover-thumb" data-toggle="modal" data-target="#comment-modal" onclick="getPostComment(\'post2\')"><span>20</span> Comment</div>
		<div class="share bg-dark hover-thumb"><span>20</span> Share</div>
	</div>
</div>
';
?>