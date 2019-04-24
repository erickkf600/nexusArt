
$(document).ready(function(){
	$('.menu').click(function () {
		$('.menu').toggleClass('clicked');  
		$('#mobile').toggleClass('show'); 
	});
	$('.pesq-icon').click(function(){
		$(".search-box").toggleClass("exibir");
		$("#navbar").toggleClass("sumir");
		$(".pesq-icon").toggleClass("close");
	});
});


//BOTÃO SCROLL UP
$(document).ready(function(){
	height = $(window).height() * 1/5;
	$('.backtop').hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > height){
			$('.backtop').fadeIn();
			$('#header').addClass('down');
		}else{
			$('.backtop').fadeOut();
			$('#header').removeClass('down');
		}
	});
	$('.backtop').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});
/*$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});*/
