$(document).ready(function(){
	$('.slider__inner').slick({
		arrows: false,
		dots: true
	}),
	$('.works__slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="icons/works-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="icons/works-right.svg" alt=""></button>'
	})
})

	