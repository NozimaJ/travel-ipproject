

window.onload = function(){
	// var btn = document.querySelector('.bars');
	// var menu = document.querySelector('.menu_sm');
	// btn.onclick = function(){
	// 	menu.classList.toggle('open');
	// 	return false;
	// }

	// var div = document.querySelector('.nav_sm .menu_block');
	// var h_window = window.outerHeight -200;
	// function parallax(){
	// 	var scroll = window.pageYOffset;
	// 	console.log(scroll >= h_window);
	// 	if(scroll >= h_window){
	// 		div.classList.add('fixed');
	// 	}else{
	// 		div.classList.remove('fixed');
	// 		// menu.classList.toggle('open');
	// 	}
	// }
	// parallax();
	// window.onscroll = function(){
	// 	parallax();
	// }

}
$(function(){
	changeBackGraound();
	$("#upcomingTourCarousel").on('slide.bs.carousel', function (e) {
		changeBackGraound();
	});
});

function changeBackGraound(){
	var url = $("#upcomingTourCarousel .carousel-item.active").data("img");
	$(".upcomingTours").css("background","transparent url("+url+") no-repeat center center");
}