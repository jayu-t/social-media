<?php
session_start();
if (!isset($_SESSION['userid']))
{
	header ('location: login.php');
}

$_SESSION['new-msg'] = 1;
$_SESSION['msg-box-body'] = 1;
$_SESSION['msg-box'] = 1;
/*
include 'path.php';
echo $INCLUDE_DIR;*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<link rel="stylesheet" href="./css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="helper.css">

	<script src="js/file-path.js"></script>
	<script src="js/posts/post.js"></script>
	<script src="js/story/story.js"></script>
	<script src="js/jquery.min.js"></script>

</head>
<body>
<!-- Header Part -->
<?php include 'include/header.php' ?>

<div class="main-container pr-5 pl-5">
	<!-- Left cards container ------------------------------------------------------------>
	<div class="left-card-container mr-3">
		<!-- include online card -->
		<?php include 'include/online-card.php' ?>
		<div class="mt-3"></div>
		<!-- include massage card -->
		<?php include 'include/massage-card.php' ?>
	</div>
	<!-- End left card container --------------#########################################-->

	<!-- post container ------------------------------------------------------------------>
	<div class="post-container">
		<div id="post-container">
			<script>
				/* Getting the posts */
				getPost();
			</script>
		</div>
	</div>
	<!-- End post container ----------------###########################################-->

	<!-- Right card container ----------------------------------------------------------->
	<div class="right-card-container ml-3">
		<!-- include Stories card -->
		<?php include 'include/story-card.php' ?>
		<div class="mt-3"></div>

		<!-- include suggession card -->
		<?php include 'include/suggesion-card.php' ?>
	</div>
	<!-- End Right card container --------------###########################################-->
</div>
<?php include 'include/status-viewer.php' ?>
<!-- include model -->
<?php include 'include/modal.php' ?>

<!-- include comment model -->
<?php include 'include/modal/comment-modal.php' ?>


<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script src="js/request/friend-request.js"></script>
<script src="js/massage.js"></script>
<script src="js/online.js"></script>

<script>
	getMyStory();
	getStory();
	getMassageList();
	whoIsOnline();
	getSuggesion();
</script>
</body>
</html>
