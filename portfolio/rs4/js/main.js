
jQuery(function($){
	var tab = $('.cl_1');
	
	tab.css('height', tab.find('>ul>li>ul:visible'));
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.cl_1:first').attr('class', 'cl_1 '+myClass);
		tab.css('height', t.next('ul'));
		return false;
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
	return false;
});

$(function(){
		$(".cr_1 dt").click(function(){
			
			
			$(".cr_1 dd").slideUp()
			$(this).next().slideDown()
			$(".cr_1 dl dt").removeClass("on")
			$(this).addClass("on")
		})
			
		})
