window.onload = function(){
	var sence = document.getElementById('sence');
	var ton = document.getElementsByClassName('ton');
	for(var i = 0;i<52;i++){
		var els = document.createElement('div');
		els.setAttribute('class','ton');
		sence.appendChild(els);
	}
	for(i = 0;i<ton.length;i++){
		if( Math.random()>0.5 ){
			ton[i].innerHTML = String.fromCharCode( Math.floor( 65+Math.random()*26 ) );
		}
		else{
			ton[i].innerHTML = String.fromCharCode( Math.floor( 97+Math.random()*26 ) );
		}
	}
	var kaiguan = true;
	var timer;
	var color = sence.firstElementChild;
	//不管是大写字母还是小写字母，e.keyCode显示的都是大写字母的ASSIC
	document.onkeydown = function(e){
		var time = document.getElementById('time');
		var count = 0;
		if(kaiguan){
			timer = setInterval(function(){
				time.innerHTML = count;
				count++;
				// if( sence.children.length == 0 ){
				// 	clearInterval(timer);
				// }
			},1000);
			kaiguan = false;
		}
		if(e.shiftKey){
			if( e.keyCode !== color.innerHTML.charCodeAt(0) ){
				return;
			}
		}
		else{
			if( e.keyCode+32 !== color.innerHTML.charCodeAt(0) ){  
				return;
			}
		}
		// sence.removeChild(ton[0]);
		color.style.background='#333';
		color = color.nextElementSibling;
		if( color == null){
			// location.reload();
			clearInterval(timer);
		}
		// console.log(e.keyCode);
	}
};