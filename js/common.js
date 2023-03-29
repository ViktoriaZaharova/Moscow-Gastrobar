$('.sales-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	dots: true,
	nextArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	appendArrows: '.sales-slider__nav',
	appendDots: '.sales-slider__nav'
});

$('.space-slider').slick({
	slidesToShow: 1,
	dots: true,
	fade: true,
	arrows: false,
	cssEase: 'ease-out',
});

$('.fixed-block').click(function (e) {
	e.preventDefault();
	$('.fixed-block-wrapper').toggleClass('active');
	var
		$this = $(this),
		content = $('.fixed-block-wrapper'),
		contentWidth = $('.fixed-top-menu').outerWidth();


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		// $this.html('Скрыть');

		content.css('right', 0);
	} else {
		$this.removeClass('trigger');
		// $this.html('Показать ещё');

		content.css('right', -contentWidth);
	}
});

$('.btn-burger').click(function () {
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').click(function () {
	$('.nav-menu').fadeOut();
});

// parallax
var parallax = new Rellax('.parallax');

// gsap
gsap.from('.home-decor1', 1.2, { opacity: 0, x: -100, delay: 0.2 });
gsap.from('.home-decor2', 1.2, { opacity: 0, x: 100, delay: 0.8 });
gsap.from('.name-company', 1.2, { opacity: 0, y: -100, delay: 1.2 });
gsap.from('.home-icon-close', 1.2, { opacity: 0, y: -100, delay: 1.4 });
gsap.from('.home-figure', 1.2, { opacity: 0, y: 100, delay: 2 });

// scrollreveal
var sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
});

sr.reveal('.sales h2, .menu-section h2, #tab-content1 .nav-tabs-category, .space h2, .space-content, .atmosphere h2', { origin: 'left'});
sr.reveal('.sales-slider__nav, .menu-wrapper .nav-tabs, #tab-content1 .btn-download, .space-slider', { origin: 'right'});
sr.reveal('.sales-slider, .menu-section .box-text, .atmosphere-box, #tab-content-category1 .menu-card', { interval: 100});
sr.reveal('.contacts');
