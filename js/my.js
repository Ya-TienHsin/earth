var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var swiper = new Swiper(".mySwiper2", {
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});
var swiper = new Swiper(".mySwiper3", {
	loop: true,
	slidesPerView: 1,
	direction: "vertical",
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	thumbs: {
		swiper: swiper,
	},
	pagination: {
		el: ".swiper-pagination1",
		clickable: false,
	},
});


// Inline popups
$('#inline-popups').magnificPopup({
	delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function () {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
$('#test-popup').magnificPopup({
	delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function () {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


$('.faq .qa-section').each(function (i) {

	var _number = i;
	$(this).click(function () {
		$(this).toggleClass('active-qa')
		$('.answer').eq(_number).slideToggle(200);
	});
});

$('.test_btn1').click(function () {
	$(".pop2").css('display', 'block'),
		$("#test-popup").addClass('test-popup11111')
})

$('.op1').click(function () {
	$('.op1').addClass('op_no'),
		$('.op1-1').addClass('op_c'),
		$('.op1_answer').css('display', 'flex'),
		$('.pop2 .illustration').addClass('illustrationShow')
})

$('.test_btn2').click(function () {
	$(".pop3").css('display', 'block'),
	$("#test-popup").addClass('test-popup11111'),
	$('.pop2 .illustration').removeClass('illustrationShow')
})

$('.op2').click(function () {
	$('.op2').addClass('op_no'),
		$('.op2-1').addClass('op_c'),
		$('.op2_answer').css('display', 'flex'),
		$('.pop3 .illustration').addClass('illustrationShow')
})

$('.test_btn3').click(function () {
	$(".pop4").css('display', 'block'),
	$("#test-popup").addClass('test-popup11111'),
	$('.pop3 .illustration').removeClass('illustrationShow')
})

$('.op3').click(function () {
	$('.op3').addClass('op_no'),
	$('.op3-1').addClass('op_c'),
	$('.op3_answer').css('display', 'flex')
	$('.pop4 .illustration').addClass('illustrationShow')
})

$('.test_btn4').click(function () {
	$(".pop5").fadeIn(),
	$("#test-popup").addClass('test-popup22222'),
	$(".test_carbons").css('display', 'none'),
	$('.pop4 .illustration').removeClass('illustrationShow')
})

$('.test_btn5').click(function () {
	event.preventDefault();
	$("html,body").animate({
		scrollTop: $("#section2").offset().top -200
	}, 500);
	
})

$('.hamburger').click(function () {
    $(".bar1").toggleClass('iconbar1');
    $(".bar2").toggleClass('iconbarc');
    $(".bar3").toggleClass('iconbar2');
    $("nav").toggleClass('show');
})
$('nav ul li').click(function () {
    $(".bar1").toggleClass('iconbar1');
    $(".bar2").toggleClass('iconbarc');
    $(".bar3").toggleClass('iconbar2');
    $("nav").toggleClass('show');
})


AOS.init();


$('.menu-item1').click(function () {
	$("html,body").animate({
		scrollTop: $("#kv").offset().top
	}, 800);
})

$('.menu-item2').click(function () {
	$("html,body").animate({
		scrollTop: $("#section2").offset().top -200
	}, 800);
})

$('.menu-item3').click(function () {
	$("html,body").animate({
		scrollTop: $("#section3").offset().top -200
	}, 800);
})