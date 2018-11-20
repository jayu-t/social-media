function acceptRequest(div) {
	var xhttp = new XMLHttpRequest();
	let userid = div.getAttribute('data-senderid');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.remove();
		}
	};
	xhttp.open("GET", ACCEPT_REQUEST+"?userid="+userid, true);
	xhttp.send();
}

function deleteRequest(div) {
	var xhttp = new XMLHttpRequest();
	let userid = div.getAttribute('data-senderid');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.remove();
		}
	};
	xhttp.open("GET", DELETE_REQUEST+"?userid="+userid, true);
	xhttp.send();
}

function sendRequest(button, userid) {
	//let  = div.getAttribute('data-senderid');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
//<a href='#' class='btn btn-sm btn-primary' type='button' onclick='sendRequest(r$i)'>Add</a>
			
			button.removeAttribute("class");
			button.removeAttribute("onclick");
			button.setAttribute('class', 'btn btn-sm btn-secondary');
			button.setAttribute('onclick', 'cancelRequest(this,\''+userid+'\')');
			button.textContent = "Cancel";
		}
	};
	xhttp.open("GET", SEND_REQUEST+"?userid="+userid, true);
	xhttp.send();
}

function cancelRequest(button, userid) {
	var xhttp = new XMLHttpRequest();
	//let userid = div.getAttribute('data-senderid');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
//<a href='#' class='btn btn-sm btn-primary' type='button' onclick='sendRequest(r$i)'>Add</a>
			
			button.removeAttribute("class");
			button.removeAttribute("onclick");
			button.setAttribute('class', 'btn btn-sm btn-primary');
			button.setAttribute('onclick', 'sendRequest(this\''+userid+'\')');
			button.textContent = "Add";
		}
	};
	xhttp.open("GET", CANCEL_REQUEST+"?userid="+userid, true);
	xhttp.send();
}

