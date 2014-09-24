function onMain(url) {
	$('#main').attr('src', url)
}

$(function() {
	
	/*
	 * Script para esconder los "menu items" de "menubar" de primefaces usando iframe
	 */
	$('#f_menubar .ui-menu-list').hover(function() {
	}, function() {
		$('#f_menubar .ui-menu-child').hide();
		$('#f_menubar .ui-menu-list li').removeClass('ui-menuitem-active');
		$('#f_menubar .ui-menu-list li a').removeClass('ui-state-hover');		
	});
	
	$('#f_menubar\\:menu_user ul').hover(function() {
	}, function() {		
		$('#f_menubar\\:menu_user_menu').css('display','none');		
		$('#f_menubar\\:menu_user_button').blur();
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

	
//	var iframeDoc = $('#main').contents().get(0);
//	$(iframeDoc).bind('click', function( event ) {
//		$('.ui-menu-child').hide()
//	});
//	
	
	
	$('#main').hover(function () {		
			//$('.ui-menu-child').hide();		
	}, function () {
		//$('.ui-menu-child').css('display','block');
	});
	
	
	
});
