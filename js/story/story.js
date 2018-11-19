function shareStory() {
	status = document.getElementById('about-post').value;
	postImage = document.getElementById('upload-story-image');
	document.getElementById('update-image').setAttribute('src', postImage.getAttribute('src'));
	document.getElementById('update-massage').innerHTML = 'Status updating';
	document.getElementById('update-massage-container').setAttribute('href', '#my-new-story');

	/**** Sending form data to php file ****/
	form = document.getElementById('story-form');
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

var totalStatus = 0;
var statusCounter = 0;

function getStory() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById("hidden-story");
	    	div.innerHTML = this.responseText;
	    	totalStatus = parseInt(document.getElementById('total').innerHTML);
	    	console.log(totalStatus);

	    	document.getElementById("stories").innerHTML = '';

			for (var i = 0; i < totalStatus; i++) {
				imgSrc = document.getElementById('img'+i).innerHTML;
				name = document.getElementById('name'+i).innerHTML;

				element = `<div class="post-header border-bottom border-dark hover-arrow" id="`+i+`" onclick="showStory(`+i+`)">
							<img src="`+imgSrc+`" alt="nikki" class="img-fluid rounded-circle ml-2">
							<h5 class="ml-4">`+name+`</h5>
						   </div>`;
				$("#stories").append(element);
				//document.getElementById("stories").innerHTML = element;
			}
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/story/get-stories.php", true);
	xhttp.send();
}

function getMyStory() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
        	/*console.log('json formated' + myObj);
        	alert(myObj.storyImage);
        	alert(myObj.desc);*/
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/story/get-my-story.php", true);
	xhttp.send();
}

function showStory(id=0) {
	document.getElementById('app-header').style.display='none';

	statusCounter = id;
	console.log('id story -- ' + id);
	document.getElementById('status-viewer-container').style.display = 'flex';

	imgSrc = document.getElementById('img'+id).innerHTML;
	desc = document.getElementById('desc'+id).innerHTML;

	img = document.getElementById('story-image');
	desc1 = document.getElementById('story-description');

	img.setAttribute('src', imgSrc);
	desc1.innerHTML = desc;

}

function showMyStory(img) {
	document.getElementById('app-header').style.display='none';
	//statusCounter = id;
	//console.log('id story -- ' + id);
	document.getElementById('status-viewer-container').style.display = 'flex';

	imgSrc = document.getElementById(img).getAttribute('src');
	desc = document.getElementById(img).getAttribute('data-desc');

	img = document.getElementById('story-image');
	desc1 = document.getElementById('story-description');

	img.setAttribute('src', imgSrc);
	desc1.innerHTML = desc;
}

function next() {
	if (statusCounter >= 0 && statusCounter < totalStatus) {
		if (statusCounter < totalStatus - 1) {
			statusCounter = statusCounter + 1
		
			let imgId = 'img'+statusCounter.toString();
			console.log(imgId);

			imgSrc = document.getElementById('img'+statusCounter).innerHTML;
			desc = document.getElementById('desc'+statusCounter).innerHTML;

			img = document.getElementById('story-image');
			desc1 = document.getElementById('story-description');

			img.setAttribute('src', imgSrc);
			desc1.innerHTML = desc;
		}
	}
}
function prev() {
	if (statusCounter >= 0 && statusCounter < totalStatus) {
		if (statusCounter != 0) {
			statusCounter = statusCounter - 1
		
			let imgId = 'img'+statusCounter.toString();
			console.log(imgId);

			imgSrc = document.getElementById('img'+statusCounter).innerHTML;
			desc = document.getElementById('desc'+statusCounter).innerHTML;

			img = document.getElementById('story-image');
			desc1 = document.getElementById('story-description');

			console.log(imgSrc);
			console.log(desc);
			console.log(img);
			console.log(desc1);

			img.setAttribute('src', imgSrc);
			desc1.innerHTML = desc;
		}
	}
}

function closeStatus() {
	document.getElementById('app-header').style.display='flex';
	document.getElementById('status-viewer-container').style.display = 'none';
}

setInterval(function() {
	console.log('story interval');
	getStory();
	//showStory();
},5000);