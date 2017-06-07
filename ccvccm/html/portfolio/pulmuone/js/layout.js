$(function(){
	
$(".topmenu dl dd a.toplogin").animate({"background-color":"#c2d710","color":"#1f4620"},300)
$(".topmenu dl dd a").click(function(){
	
	$(this).animate({"background-color":"#c2d710","color":"#1f4620"},300)
	
	$(".topmenu dl dd a").css("background","none").css("color","#000000")
})	
	
//topmenu end

//gnb start

$("ul.mgnb li a.mgnb_menu").bind('focus',function(){
	
	$(this).parents('li').find("ul.sgnb").fadeIn('fast')
	$(this).parents('li').siblings().find('ul.sgnb').fadeOut('fast')
	
})

$("ul.mgnb li.mgnb_06 li:last").find('a').bind('blur',function(){
	
	$("ul.mgnb li.mgnb_06 ul").fadeOut('fast')
	
})

//tab end

$("ul.mgnb li.m_menu").not(".sgnb li").mouseenter(function(){
$("ul.sgnb").css("display","none")
$(this).find("ul.sgnb").css("display","block")

})

$("ul.sgnb").mouseleave(function(){
$("ul.sgnb").css("display","none")

})









////////////////////////////////////////////// 탑메뉴 tap 운용 

$(".topmenu dd a").bind('focus',function(){


$(this).animate({"background-color":"#c2d710","color":"#1f4620"},300)
$(".topmenu dl dd a").css("background","none").css("color","#000000")
})


$(".topmenu dl dd.top_m_last").find('a').bind('blur',function(){

	$(this).css("background","none").css("color","#000000")
})


/////////////////////////////////////////////////////////////////

})
