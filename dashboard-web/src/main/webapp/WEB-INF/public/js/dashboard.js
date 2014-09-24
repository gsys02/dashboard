function onMain(url) {
	$('#main').attr('src', url)
}

$(function() {
	/*
	 * Script para esconder los menus items de menubar de primefaces en iframe
	 */
	$('.ui-menu-list').hover(function() {
	}, function() {
		$('.ui-menu-child').hide();
		$('.ui-menu-list li').removeClass('ui-menuitem-active');
		$('.ui-menu-list li a').removeClass('ui-state-hover');
	});

	$('#f_menubar\\:user').click(function() {

		$('#main').attr('src', 'http://www.w3schools.com/tags/tag_br.asp')

		// $('#main').html("s");

		// $.ajax({
		// url : "http://dev:8080/web/login",
		// crossDomain : true
		// }).done(function(data) {
		// $('#main').html(data);
		// });

	})

});