// sidebar responsive
const btnSidebar = document.querySelector('.openSidebar');
const mainSidebar = document.querySelector('.main-sidebar');
if (btnSidebar) {
	btnSidebar.addEventListener('click', () => {
		mainSidebar.classList.toggle('showsidebar');
	});
}
const closeSidebar = document.querySelector('.closeSidebar');
if (closeSidebar) {
	closeSidebar.addEventListener('click', () => {
		mainSidebar.classList.remove('showsidebar');
	});
}

// header popup
const notificationBtn = document.querySelector('.notification-btn');
const notificationOverlay = document.querySelector('.notification-overlay');
const notification = document.querySelector('.notification');

const walletBtn = document.querySelector('.wallet-btn');
const walletOverlay = document.querySelector('.wallet-overlay');
const wallet = document.querySelector('.wallet');

const etheriumBtn = document.querySelector('.etherium-btn');
const etheriumOverlay = document.querySelector('.etherium-overlay');
const etherium = document.querySelector('.etherium');

const connectOverlay = document.querySelector('.connect-overlay');
const connect = document.querySelector('.connect');

const showPopup = (btn) => {
	console.log(btn);
	if (btn === 'notification') {
		notification.classList.toggle('show-notification');
		notificationOverlay.classList.toggle('show-notification-overlay');
	} else if (btn === 'wallet') {
		wallet.classList.toggle('show-wallet');
		walletOverlay.classList.toggle('show-wallet-overlay');
	} else if (btn === 'etherium') {
		etherium.classList.toggle('show-etherium');
		etheriumOverlay.classList.toggle('show-etherium-overlay');
	}
};
const closePopup = (btn) => {
	if (btn === 'notification') {
		notification.classList.remove('show-notification');
		notificationOverlay.classList.remove('show-notification-overlay');
	} else if (btn === 'wallet') {
		wallet.classList.toggle('show-wallet');
		walletOverlay.classList.remove('show-wallet-overlay');
	} else if (btn === 'connect') {
		connect.classList.toggle('show-connect');
		connectOverlay.classList.remove('show-connect-overlay');
	} else if (btn === 'etherium') {
		etherium.classList.toggle('show-etherium');
		etheriumOverlay.classList.remove('show-etherium-overlay');
	}
};

// notificationBtn
if (notificationBtn) {
	notificationBtn.addEventListener('click', () => {
		showPopup('notification');
	});
	notificationOverlay.addEventListener('click', () => {
		closePopup('notification');
	});
}

// walletBtn
if (walletBtn) {
	walletBtn.addEventListener('click', () => {
		showPopup('wallet');
	});
	walletOverlay.addEventListener('click', () => {
		closePopup('wallet');
	});
}

// etheriumBtn
if (etheriumBtn) {
	etheriumBtn.addEventListener('click', () => {
		showPopup('etherium');
	});
	etheriumOverlay.addEventListener('click', () => {
		closePopup('etherium');
	});
}

// connect
if (connectOverlay) {
	connectOverlay.addEventListener('click', () => {
		closePopup('connect');
	});
}

// etherium popup
const jsEtherium = document.querySelector('.js-etherium');
const closeBtn = document.querySelector('.close-popup');
const currencyOverlay = document.querySelector('.currency-overlay');

if (jsEtherium) {
	const currencyPopupBtn = jsEtherium.querySelector('.input-box');
	currencyPopupBtn.addEventListener('click', () => {
		jsEtherium.classList.add('show-popup');
	});

	closeBtn.addEventListener('click', () => {
		jsEtherium.classList.remove('show-popup');
	});
	currencyOverlay.addEventListener('click', () => {
		jsEtherium.classList.remove('show-popup');
	});
}

/*===================================================
    Template Scripts
====================================================*/
(function ($) {
	'use strict';

	// Preloader
	$(window).on('load', function () {
		$('body').addClass('loaded');
	});

	$(document).ready(function () {
		// Main Header
		var primaryHeader = $('.primary-header'),
			headerClone = primaryHeader.clone();
		$('.header').after('<div class="sticky-header"></div>');
		$('.sticky-header').html(headerClone);
		var headerSelector = document.querySelector('.sticky-header');
		var triggerPoint = $('.header').height();
		var yOffset = 0;

		$(window).on('scroll', function () {
			yOffset = $(window).scrollTop();
			if (yOffset >= triggerPoint) {
				$('.sticky-header').addClass('sticky-fixed-top');
			} else {
				$('.sticky-header').removeClass('sticky-fixed-top');
			}
		});

		if ($('.primary-header').length) {
			$('.header .primary-header .burger-menu').on('click', function () {
				$(this).toggleClass('menu-open');
				$('.header .header-menu-wrap').slideToggle(300);
			});

			$('.sticky-header .primary-header .burger-menu').on('click', function () {
				$(this).toggleClass('menu-open');
				$('.sticky-header .header-menu-wrap').slideToggle(300);
			});
		}

		$('.header-menu-wrap ul li:has(ul)').each(function () {
			$(this).append('<span class="dropdown-plus"></span>');
			$(this).addClass('dropdown_menu');
		});

		$('.header-menu-wrap .dropdown-plus').on('click', function () {
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('dropdown-open');
			$('.header-menu-wrap ul li:has(ul)').toggleClass('dropdown-open');
		});

		$('.header-menu-wrap .dropdown_menu a').append('<span></span>');

		// Responsive Classes
		function responsiveClasses() {
			var body = $('body');
			if ($(window).width() < 992) {
				body.removeClass('viewport-lg');
				body.addClass('viewport-sm');
			} else {
				body.removeClass('viewport-sm');
				body.addClass('viewport-lg');
			}
		}

		// ResponsiveClasses();
		$(window)
			.on('resize', function () {
				responsiveClasses();
			})
			.resize();

		// Popup Search Box
		$(function () {
			$('#popup-search-box').removeClass('toggled');

			$('.dl-search-icon').on('click', function (e) {
				e.stopPropagation();
				$('#popup-search-box').toggleClass('toggled');
				$('#popup-search').focus();
			});

			$('#popup-search-box input').on('click', function (e) {
				e.stopPropagation();
			});

			$('#popup-search-box, body').on('click', function () {
				$('#popup-search-box').removeClass('toggled');
			});
		});

		/* Accordion */
		$(document).ready(function () {
			$('#accordian h3').click(function () {
				$(this).toggleClass('active');
				//slide up all the link lists
				$('#accordian ul ul').slideUp();
				//slide down the link list below the h3 clicked - only if its closed
				if (!$(this).next().is(':visible')) {
					$(this).next().slideDown();
				}
			});
		});

		// Scrool To Top
		var scrollTop = $('#scroll-top');
		$(window).on('scroll', function () {
			var topPos = $(this).scrollTop();
			if (topPos > 100) {
				$('#scrollup').removeClass('hide');
				$('#scrollup').addClass('show');
			} else {
				$('#scrollup').removeClass('show');
				$('#scrollup').addClass('hide');
			}
		});

		$(scrollTop).on('click', function () {
			$('html, body').animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});
	});
})(jQuery);
