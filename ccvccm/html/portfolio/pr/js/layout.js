$(function(){
$(".gnb ul").hover(function(){
		$("#box1").stop().animate({height:250},250).css("display","block")
		$(".gnb_1").stop().slideDown(250)
		
	},function(){
		
		$(".gnb_1").stop().slideUp(250)
		$("#box1").stop().animate({height:0},250)
	})
$(".gnb_1 li").hover(function(){
			$(this).find("a").css("color","#0074BF")
		

	
},function(){
		$(".gnb_1 li a").css("color","#000000")

})
$("#box1").hover(function(){
	$("#box1").stop().animate({height:250},250).css("opacity","1")
	$(".gnb_1").stop().slideDown(250)
	
	
},function(){
		$(".gnb_1").stop().slideUp(250)
		$("#box1").stop().animate({height:0},250)
	
})

//////////////tab 운용


$(".no2 a.gnb_title").bind("focus",function(){
	$(this).parent().parent().find("ul.gnb_1").css("display","block")
	$("#box1").stop().animate({height:250},250)
	
	
})
$(".gnb_menu .gnb_last li:last").find("a").bind("blur",function(){
	$(".gnb_1").css("display","none")
	$("#box1").stop().animate({height:0},250)
	
})










})
