function showRequests() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('request-model-content');
	    	div.innerHTML = this.responseText
		} 
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/get-request.php", true);
	xhttp.send();
}

function showNotifications() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//document.getElementById("demo").innerHTML = this.responseText;
			div = document.getElementById('notification-model-content');
	    	div.innerHTML = this.responseText
	    	//alert(this.responseText);
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/notification/notification.php", true);
	xhttp.send();
}

function showMassages() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//document.getElementById("demo").innerHTML = this.responseText;
			div = document.getElementById('massage-model-content');
	    	div.innerHTML = this.responseText
	    	//alert(this.responseText);
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/massage/massage.php", true);
	xhttp.send();
}

function getSuggesion() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById("suggesion-container");
	    	div.innerHTML = this.responseText
	    	//alert(this.responseText);
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/request/suggesion/suggesion.php", true);
	xhttp.send();
}

function searchName(input) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('search-result');
	    	div.innerHTML = this.responseText;
	    	//console.log(input.value);
		} 
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/search/search-name.php", true);
	xhttp.send();
}

setInterval(function(){
	console.log('main');
	showRequests();
	showNotifications();
	showMassages();
},5000);