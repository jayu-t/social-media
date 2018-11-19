function acceptRequest(div) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.remove();
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/accept-request.php", true);
	xhttp.send();
}

function deleteRequest(div) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.remove();
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/delete-request.php", true);
	xhttp.send();
}

function sendRequest(button) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
//<a href='#' class='btn btn-sm btn-primary' type='button' onclick='sendRequest(r$i)'>Add</a>
			
			button.removeAttribute("class");
			button.removeAttribute("onclick");
			button.setAttribute('class', 'btn btn-sm btn-secondary');
			button.setAttribute('onclick', 'cancelRequest(this)');
			button.textContent = "Cancel";
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/send-request.php", true);
	xhttp.send();
}

function cancelRequest(button) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
//<a href='#' class='btn btn-sm btn-primary' type='button' onclick='sendRequest(r$i)'>Add</a>
			
			button.removeAttribute("class");
			button.removeAttribute("onclick");
			button.setAttribute('class', 'btn btn-sm btn-primary');
			button.setAttribute('onclick', 'sendRequest(this)');
			button.textContent = "Add";
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/cancel-request.php", true);
	xhttp.send();
}

