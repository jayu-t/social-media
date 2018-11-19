function getMassageList() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div = document.getElementById('massage-container');
			div.innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/massage/massage.php", true);
	xhttp.send();
}
const maxMassageBox = 5;
var msgBoxCounter = 0;
//var queue = [];
var queue = [];

function displayMassageBox(onlineUserId, badge) {
	createMassageBox(onlineUserId);
	//alert('displayMassageBox')
	console.log('massage -- '+ document.getElementById('new-msg-121'));
	console.log('asdfg' + document.getElementById('input-msg'+msgBoxCounter));
	getNewMassage(onlineUserId, "msg-box-body"+msgBoxCounter);
	console.log('badge = '+ badge +' id = '+ document.getElementById(badge));
	document.getElementById(badge).innerHTML = '';

	loadMassages(onlineUserId, document.getElementById("msg-box-body"+msgBoxCounter));

	/*div = `<div id=online-user-`+msgBoxCounter+`>`+onlineUserId+`</div>`;
	$("#msg-box-body"+msgBoxCounter).append(div);*/

	/*let a = 5;
	while(a < 10) {
		getNewMassage(onlineUserId, "msg-box-body"+msgBoxCounter);
	}*/
}

function displayMassageBox(onlineUserId) {
	createMassageBox(onlineUserId);
	//alert('displayMassageBox')
	console.log('massage -- '+ document.getElementById('new-msg-121'));
	console.log('asdfg' + document.getElementById('input-msg'+msgBoxCounter));
	getNewMassage(onlineUserId, "msg-box-body"+msgBoxCounter);
	//console.log('badge = '+ badge +' id = '+ document.getElementById(badge));
	//document.getElementById(badge).innerHTML = '';

	loadMassages(onlineUserId, document.getElementById("msg-box-body"+msgBoxCounter));

	/*div = `<div id=online-user-`+msgBoxCounter+`>`+onlineUserId+`</div>`;
	$("#msg-box-body"+msgBoxCounter).append(div);*/

	/*let a = 5;
	while(a < 10) {
		getNewMassage(onlineUserId, "msg-box-body"+msgBoxCounter);
	}*/
}

function createMassageBox(onlineUserId) {
	console.log('online-user -' + onlineUserId);
	console.log('queue length - '+queue.length);
	msgBoxCounter = msgBoxCounter + 1;
	console.log("msgBoxCounter - "+msgBoxCounter);
	if(queue.length < maxMassageBox)
	{
		queue.push(msgBoxCounter);
		msgBox = createMassageBoxStructure(onlineUserId);
		$("body").append(msgBox);
		dragElement(("msg-box"+msgBoxCounter), ("msg-box-header"+msgBoxCounter));
	}
	else 
	{
		removeMsgBox = queue.shift();
		queue.push(msgBoxCounter);
		msgBox = createMassageBoxStructure(onlineUserId);
		console.log('removeMsgBox - ' + removeMsgBox);
		document.getElementById('msg-box'+removeMsgBox).remove();
		$("body").append(msgBox);
		dragElement(("msg-box"+msgBoxCounter), ("msg-box-header"+msgBoxCounter));
	}
	let msgBoxId = 'msg-box' + msgBoxCounter;
	console.log('queue - ' + queue);
	console.log('-------------------------------------------');
	//alert('ok');
}

function createMassageBoxStructure(onlineUserId)
{
	msgBox = `<div class="massage-box" id="msg-box`+msgBoxCounter+`">
				<div class="massage-box-header" id="msg-box-header`+msgBoxCounter+`">
					<img src="nikki.png" alt="">
					<h5>Jayesh Tajane</h5>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
					<a href="#" onclick="closeMassageBox('`+msgBoxCounter+`')"><i class="fas fa-times"></i></a>
				</div>
				<div class="massage-box-body" id="msg-box-body`+msgBoxCounter+`" data-touserid="`+onlineUserId+`">
					
				</div>
				<div class="massage-box-footer">
					<div class="input">
						<textarea class="focus" name="" cols="30" rows="2" id="input-msg`+msgBoxCounter+`" autofocus></textarea>
						<button onclick="sendMassage('`+onlineUserId+`','input-msg`+msgBoxCounter+`','msg-box-body`+msgBoxCounter+`')">Send</button>
					</div>
				</div>
			 </div>`;
	return msgBox; 
}

function closeMassageBox(id) {
	console.log('fn-delete msgBox '+ id);
	document.getElementById('msg-box'+id).remove();
	deleteElement(id);
	console.log('queue length - ' + queue.length);
}

//[1,2,3,4,5]
function deleteElement(n) {
	let found=0;
	for (var i = 0; i < queue.length; i++) {  // i < queue.length --- 0 < 3
		if(queue[i] == n) {
			found +=1;
			break;
		}
	}
	if (found != 1) {
		return false;
	}
	let sub1 = new Array();
	let sub2 = new Array();
	for (let j = 0; j < i; j++) {
		sub1[j] = queue[j];	
	}
	var count = 0;
	for (let j = i+1; j < queue.length; j++) {
		sub2[count] = queue[j];	
		count += 1;
	}
	console.log('fn sub1 - ' + sub1);
	console.log('fn sub2 - ' + sub2);
	queue = sub1.concat(sub2);
	console.log('fn del element - ' + n);
	console.log('fn queue - ' + queue);
}


// Make the DIV element draggable:

function dragElement(elmnt, header) {
  elmnt = document.getElementById(elmnt);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  console.log('drag element header - ' + header);
  if (document.getElementById(header)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(header).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    //elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function loadMassages(id, div) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == '') {
				$( div ).prepend( 'say hello to your friend' );
			}
    		$( div ).prepend( this.responseText );
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/massage/get-massage.php?userid="+id, true);
	xhttp.send();
}

function getNewMassage(onlineUserId, div) {
	var xhttp = new XMLHttpRequest();
	/*console.log('userid sm - '+ userId);
	console.log('inputBox sm - '+ inputBox);
	console.log('msg div - '+document.getElementById(inputBox).value);*/
	var div = document.getElementById(div);
	//massageBox = document.getElementById(massageBox);*/
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.innerHTML = div.innerHTML + this.responseText;
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/massage/get-new-massage.php?userid="+onlineUserId, true);
	xhttp.send();
}

function sendMassage(userId, inputBox, massageBox) {
	var xhttp = new XMLHttpRequest();
	console.log('userid sm - '+ userId);
	console.log('inputBox sm - '+ inputBox);
	console.log('msg div - '+document.getElementById(inputBox).value);
	inputBox = document.getElementById(inputBox);
	var msg = inputBox.value;
	massageBox = document.getElementById(massageBox);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			massageBox.innerHTML = massageBox.innerHTML + this.responseText;
			//var objDiv = document.getElementById(mas);
			massageBox.scrollTop = massageBox.scrollHeight;
			inputBox.value = '';
		}
	};
	xhttp.open("GET", "http://localhost/Projects/MYPROJECT/lib/massage/send-massage.php?userid="+userId+"&msg="+msg, true);
	xhttp.send();
}

//setInterval(function(){ alert("Hello"); }, 3000);


setInterval(function(){
	console.log('online - interval');
	whoIsOnline();
	for(let i = 0; i < queue.length; i++) {
		console.log('massage - interval');
		let div = 'msg-box-body'+queue[i];
		//alert('div --- ' + div);
		let onlineUserId = document.getElementById(div).getAttribute('data-touserid');
		//alert('onlineUserId --- ' + onlineUserId);
		getNewMassage(onlineUserId, div);
	}
},5000);