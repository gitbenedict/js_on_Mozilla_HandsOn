$(function(){
	$("h1").text("Hello world!");
	
	/*document.querySelector('html').onclick = function() {
		/*The above line is equivalent to
		var myHTML = document.querySelector('html');
		myHTML.onclick = function() {}; 
	    alert('Ouch! Stop poking me!');
	}; */
	
	$("img").click(function(){
		var imgattr = $(this).attr('src');
		if(imgattr == "images/firefox-icon.png"){
			$(this).attr('src', 'images/firefox2.png');
		}else if(imgattr == "images/firefox2.png"){
			$(this).attr('src', 'images/firefox-icon.png');
		}
	});
	
	$("#btn1").click(function(){
		var name = prompt("Enter your Name");
		if(name.length != 0){
			$("h1").text("Mozilla is cool, " + name);
		}else{
			$("h1").text("Mozilla is cool");
		}
	});
});