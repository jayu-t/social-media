<div class="header pr-5 pl-5" id="app-header">
	<div class="branding">
		<h1>
			<i class="fab fa-facebook"></i><span class="mr-3 ml-3">|</span>Intagram
		</h1>
	</div>
	<a href="#" id="update-massage-container">
		<div>
			<span id="update-massage"></span>
			<img src="" alt="" id="update-image">
		</div>
	</a>
	<div class="search">
		<button class="btn btn-primary" data-toggle="modal" data-target="#add-new-story" onclick="readURL(this)"><i class="far fa-edit"></i> Write story</button>
		<button class="btn btn-primary" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i> Search</button>
		<button class="btn btn-primary" data-toggle="modal" data-target="#create-new-post" onclick="readURL(this)"><i class="far fa-edit"></i> Write Post</button>
	</div>

	<div class="nav">
		<ul>

			<!-- onclick="showRequests()" -->
			<a href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="showRequests()"><li ><i class="fas fa-user-friends"></i><span class="badge badge-light ml-1">4</span></li></a>

			<!-- onclick="showMassage()" -->
			<a href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" onclick="showMassages()"><li class=""><i class="far fa-comment-alt"></i><span class="badge badge-light ml-1">4</span></li></a>

			<!-- onclick="showNotification()" -->
			<a href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" onclick="showNotifications()"><li class=""><i class="far fa-bell"></i><span class="badge badge-light ml-1">4</span></li></a>

			<!-- view profile" -->
			<a href="#" type="button" class="btn btn-primary"><li class=""><i class="far fa-user"></i></li></a>
		</ul>
	</div>
</div>