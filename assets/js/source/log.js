;$(document).ready(function() {

	var
		doc = $(this),
		wind = $(window),

		// Текущий активный div, сюда закидывать контент, когда проскролено до конца
		openedEl,

		// Номер группы с дивами, можно определить, что подгружать
		// 1 - общий для всех банлогов и списков игроков,
		// 2 - игроки онлайн,
		// 3 - банлог
		tabGroup = 2,

		// Номер сервера, вкладка которого сейчас открыта
		serverId = 1,
		
		// Последний полученный href
		lastHref = '#gamers';

	$('body').on('click','#changer',function(e) {
		var 
			a = $(this),
			li = a.parent(),
			ul = li.parent();	

		tabGroup = ul.data('group');
		lastHref = a.attr('href');

		ul.each(function() {
			$(this).find('li').removeClass('active');
		});	
		li.addClass('active');
		var tabGroupEl = $('#tab-group-' + tabGroup);

		tabGroupEl.each(function() {
			$(this).children('.tab').removeClass('active');
		});
		opened = tabGroupEl.children(lastHref + '-tab');
		opened.addClass('active');

		var split = lastHref.split('-');
		if(split.length != 2) {
			var elId;
			opened.each(function() {
				elId = $(this).find('.tab.active').attr('id');
			});
			var split = elId.split('-');
			serverId = split[1];
		}
		else {
			serverId = split[1];		
		}
		// console.log('serverId = ' + serverId);
		// console.log('groupId = ' + tabGroup);
		// console.log(' ');

	});

	$(window).scroll(function() {
		if(wind.height() + wind.scrollTop() >= doc.height()) {
			console.log('конец страницы..');

			if((tabGroup == 2 || lastHref == '#gamers') && serverId == 1) {
				console.log('Игроки, 1 сервер');
			}
			else if((tabGroup == 2 || lastHref == '#gamers') && serverId == 2) {
				console.log('Игроки, 2 сервер');
			}
			else if((tabGroup == 2 || lastHref == '#gamers') && serverId == 3) {
				console.log('Игроки, 3 сервер');
			}
			else if((tabGroup == 3 || lastHref == '#banlog') && serverId == 1) {
				console.log('Банлог, 1 сервер');
			}
			else if((tabGroup == 3 || lastHref == '#banlog') && serverId == 2) {
				console.log('Банлог, 2 сервер');
			}
			else if((tabGroup == 3 || lastHref == '#banlog') && serverId == 3) {
				console.log('Банлог, 3 сервер');
			}								
		}
	})
})
