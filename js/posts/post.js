function getPost() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('post-container');
	    	div.innerHTML = this.responseText
		} 
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/post/get-post.php", true);
	xhttp.send();
}

function readURL(input, id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(id)
                .attr('src', e.target.result)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function sharePost() {
	//image = document.getElementById('images-selector');
	status = document.getElementById('about-post').value;
	postImage = document.getElementById('post-image');
	document.getElementById('update-image').setAttribute('src', postImage.getAttribute('src'));
	document.getElementById('update-massage').innerHTML = 'Post updating';
	document.getElementById('update-massage-container').setAttribute('href', '#my-new-post');

	var post = `
	<div class="post mb-2" id="my-new-post">
		<div class="post-header">
			<img src="`+postImage.getAttribute('src')+`" alt="nikki" class="img-fluid rounded-circle ml-2">
			<h5 class="ml-4">Jayesh Tajane</h5>
		</div>
		<div class="post-body">
			<div class="post-discription pl-2 pr-2 pt-2 pb-2">
				`+status+`
			</div>
			<div class="post-img">
				<img src="`+postImage.getAttribute('src')+`" alt="" class="img-fluid h-10 center mt-1">
			</div>
		</div>
		<div class="post-footer">
			<div class="like border-right border-white">Like</div>
			<div class="comment border-right border-white">Comment</div>
			<div class="share">Share</div>
		</div>
	</div>`;

	document.getElementById('post-container').insertAdjacentHTML('afterbegin',post);

	/**** Sending form data to php file ****/
	form = document.getElementById('post-form');
	var request = new XMLHttpRequest();
	var formData = new FormData(form);
	request.open('post', 'http://localhost/Projects/MYPROJECT/lib/user/story/upload-story.php', true);
	request.send(formData);
	request.onreadystatechange = function() {
	    if(request.readyState == 4 && request.status == 200) {
	        alert(this.responseText);
	    }
	}
}

function setImage(input, imgId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        return reader.onload = function (e) {
            $(imgId)
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function like(id, div) {
	let postId = document.getElementById(id).getAttribute('data-postid');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText == "1")
			{
	    		div.style.backgroundColor = 'green';
	    		var fun = "unlike('"+id+"', this)" ;
				div.setAttribute('onclick', fun);
	    		div.setAttribute('class', 'like border-right border-white hover-thumb hover-color-green');
				var num = div.firstChild.innerHTML;
				num = parseInt(num) + 1;
				div.firstChild.innerHTML = num;
			}
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/post/like/give-like.php?post-id=" + postId, true);
	xhttp.send();
}

function unlike(id , div) 
{
	let postId = document.getElementById(id).getAttribute('data-postid');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText == "1")
			{
	    		div.style.backgroundColor = 'black';
	    		var fun = "like('"+id+"', this)" ;
				div.setAttribute('onclick', fun);
				div.setAttribute('class', 'like border-right border-white bg-dark hover-thumb');
	    		console.log(div);
				console.log(div.firstChild);
				var num = div.firstChild.innerHTML;
				console.log(num);
				num = parseInt(num) - 1;
				console.log(num);
				div.firstChild.innerHTML = num;
			}
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/post/like/unlike.php?post-id=" + postId, true);
	xhttp.send();
}


function getPostComment(id) {
	//alert('getPostComment');
	let postId = document.getElementById(id).getAttribute('data-postid');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//alert('getPostComment');
			document.getElementById('comment-container').setAttribute('data-postid', postId);
			document.getElementById('comment-container').innerHTML = this.responseText;
			console.log('comment-container' + document.getElementById('comment-container'));
    		/*div.style.backgroundColor = 'green';
    		var fun = "unlike('"+id+"', this)" ;
			div.setAttribute('onclick', fun);
    		div.setAttribute('class', 'like border-right border-white hover-thumb hover-color-green');
			var num = div.firstChild.innerHTML;
			num = parseInt(num) + 1;
			div.firstChild.innerHTML = num;*/
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/post/comment/get-post-comment.php?post-id=" + postId, true);
	xhttp.send();
}
var commentId = 1;
function sendComment(commentText) {
	var xhttp = new XMLHttpRequest();
	commentText = document.getElementById(commentText).value;
	let postId = document.getElementById('comment-container').getAttribute('data-postid');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//alert('comment send');
			let comment = `<div class='comment-content border-bottom border-dark hover-arrow mt-2' id='comment`+commentId+`'>
						    <div class='comment'>
							  <div class='comment-sender-name'>
								<span class='pl-3'>Jayesh Tajane</span>
							  </div>
							  <div class='comment-text'>
								<span class='pl-3'>Hello pi = `+postId+` comment-text = `+commentText+`</span>
							  </div>
						    </div>
						  </div>`;
			document.getElementById('comment-container').innerHTML += comment;
			$("body, #comment-container").animate({
    			scrollTop: $("#comment"+commentId).offset().top
			},1000);

			commentId += 1;
		} 
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/post/comment/send-comment.php?post-id="+postId, true);
	xhttp.send();
}