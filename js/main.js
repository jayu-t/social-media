function showRequests() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('request-model-content');
	    	div.innerHTML = this.responseText
		} 
	};
	xhttp.open("GET", GET_REQUEST, true);
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
	xhttp.open("GET", NOTIFICATION, true);
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
	xhttp.open("GET", MASSAGE, true);
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
	xhttp.open("GET", SUGGESSION, true);
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
	xhttp.open("GET", SEARCH_NAME, true);
	xhttp.send();
}

setInterval(function(){
	console.log('main');
	showRequests();
	showNotifications();
	showMassages();
},5000);