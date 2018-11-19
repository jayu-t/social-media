function whoIsOnline() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('online-friend-container');
			div.innerHTML = this.responseText
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/user/online/online.php", true);
	xhttp.send();
}
