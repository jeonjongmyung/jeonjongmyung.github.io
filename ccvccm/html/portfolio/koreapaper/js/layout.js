$(function(){
	

//topmenu end

//gnb start


$("li.m_menu a.m_menu_a").bind('focus',function(){


$(this).next().css("display","block")
$(this).parents('li').siblings().find('ul.s_menu').css("display","none")

})

$("ul.menu li.mr_n li:last").find('a').bind('blur',function(){
	
	$("ul.menu li.mr_n ul").css("display","none")
	
})





$(".m_menu a.m_menu_a").mouseenter(function(){

$("ul.s_menu").hide().fadeOut()
$(this).next("ul.s_menu").hide().fadeIn()


})

$("ul.s_menu").mouseleave(function(){

$(this).fadeOut()
})




//////////////////////////////////////////////



})
