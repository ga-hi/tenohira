jQuery(function ($) {
	$('#sp_menu').click(function () {
		$('.icon_link_tab').addClass('open');
		$('#sp_menu').addClass('invisible');
	});
	$('.close_btn').click(function () {
		$('.icon_link_tab').removeClass('open');
		$('#sp_menu').removeClass('invisible');
	});
	$(function () {
		$("#acmenu dt").click(function () {
			$(this).next().slideToggle();
			$(this).toggleClass("active");
		});
	});
	$(document).ready(function () {
		var pagetop = $('#pagetop');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				pagetop.fadeIn();
			} else {
				pagetop.fadeOut();
			}
		});
		pagetop.click(function () {
			$('body, html').animate({ scrollTop: 0 }, 600);
			return false;
		});
	});
});