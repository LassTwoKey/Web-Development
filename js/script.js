$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();



$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;


	$('body,html').animate({
		scrollTop: top
	}, 600);
});



$(document).ready(function () {
	$('.circle_1').click(function (event) {
		$('._image1').toggleClass('image__click');
	});
	$('.circle_2').click(function (event) {
		$('._image2').toggleClass('image__click');
	});
	$('.circle_3').click(function (event) {
		$('._image3').toggleClass('image__click');
	});
});



$('.latest-works__link').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.latest-works__image_block').show();
	} else {
		$('.latest-works__image_block').hide();
		$('.latest-works__image_block.f_' + i).show();
	}
	$('.latest-works__link').removeClass('latest-works__link_act');
	$(this).addClass('latest-works__link_act');
});



const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 1200,
	delay: 200,
	//reset: true
});

sr.reveal('.about-us__item', { interval: 100 });
sr.reveal('.our-serv__block', { interval: 100 });
sr.reveal('.latest-works__list li', { origin: 'left', interval: 90 });
sr.reveal('.wd-project__title', { origin: 'top' });
sr.reveal('.wd-project__text', { delay: 250 });
sr.reveal('.wd-project__btn-1', { origin: 'left', delay: 300 });
sr.reveal('.wd-project__btn-2', { origin: 'right', delay: 300 });
sr.reveal('.latest-works__image_block', { origin: 'bottom', interval: 100 });
//sr.reveal('.pricing-plan__block', {origin: 'right'});
sr.reveal('.our-team-member__image', { origin: 'top', interval: 100 });

sr.reveal('.our-team-member__label', {});
sr.reveal('.our-team-member__sublabel', {});
sr.reveal('.our-team-member__soc-media', {});

sr.reveal('.img-left', { origin: 'left', distance: '100px', });
sr.reveal('.img-right', { origin: 'right', distance: '100px' });

sr.reveal('.contact-us__image', { interval: 100, });
sr.reveal('.contact-us__subtitle', { delay: 270 });





new Swiper('.pricing-plan__content', {
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		992: {
			watchOverflow: true,
			slidesPerView: 3,
		},

	},
});
