function onMain(url) {
	$('#main').attr('src', url);
	$('#main').css("background-image","none");
}

$(function() {

	/*
	 * Script para esconder los "menu items" de "menubar" de primefaces usando
	 * iframe
	 */
	$('#f_menubar .ui-menu-list').hover(function() {
	}, function() {
		$('#f_menubar .ui-menu-child').hide();
		$('#f_menubar .ui-menu-list li').removeClass('ui-menuitem-active');
		$('#f_menubar .ui-menu-list li a').removeClass('ui-state-hover');
	});

	$('#main').iframeTracker({
		blurCallback : function() {
			$('#f_menubar\\:menu_user_menu').hide();
		}
	});

});
