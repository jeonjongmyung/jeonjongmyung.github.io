$(function(){
	$(".concepttxt").stop().css("display","none")
	$(".conceptimg").mouseover(function(){
		$(".concepttxt").stop().css("display","block").css("opacity","0").animate({"opacity":"1"},300)
	}).mouseout(function(){
		$(".concepttxt").stop().css("opacity","1").animate({"opacity":"0"},300)
	})
	
	
	
	
	




		// namecard
	$(".name_s li").hide().fadeIn(1000)
 	$(".name_s li").hover(function(){
 		var num=0,imgurl=""
 		num=$(this).index()
 		imgurl="images/namecard_top"+num+".png"
 		$("#namecard_top img").attr("src",imgurl).hide().fadeIn(300)
 	$(".name_s li").children("p").css("display","none")
	$(this).children("p").css("display","block").hide().fadeIn(300)
 		
 	},function(){
 		$(".name_s li").children("p").css("display","none")
 	})
 	$(".name_s li").hover(function(){
 		$(this).css("cursor","pointer")
 	})
 	
 	
 	
 	// brand
 	$(".con>ul").hide()
 	$(".con>ul.event1").fadeIn(1000)
 	$(".con>ul.event2").delay(100).fadeIn(1000)
 	$(".con>ul.event3").delay(200).fadeIn(1000)
 	
 	
 	
 	$(".con>ul>li>p").hide()
 	$(".con>ul>li").mouseover(function(){
 		$(this).css("cursor","pointer")
 		$(this).children("p").stop().hide().fadeIn()
 		
 		
 	}).mouseout(function(){
 		$(".con>ul>li>p").hide().fadeOut()
 		
 		
 	})
 	
 	
 	$(".con>ul.event1>li").click(function(){
 		var num=0
 		num=$(this).index()
 		$("html,body").animate({scrollTop:0},350)
 		$(".lightbox").hide().fadeIn(500)
 		$(".eventbox").css("display","block")
 		$(".eventbox>img").hide()
 		$(".eventbox>img").eq(num).hide().fadeIn(500)
 		
 	})
 	
 	
 	
 	
 	$(".con>ul.event2>li").click(function(){
 		var num=0
 		num=$(this).index()
 		num+=3
 		$("html,body").animate({scrollTop:0},350)
 		$(".lightbox").hide().fadeIn(500)
 		$(".eventbox").css("display","block")
 		$(".eventbox>img").hide()
 		$(".eventbox>img").eq(num).hide().fadeIn(500)
 		
 	})
 	
 	
 	
 	$(".con>ul.event3>li").click(function(){
 		var num=0
 		num=$(this).index()
 		num+=6
 		$("html,body").animate({scrollTop:0},350)
 		$(".lightbox").hide().fadeIn(500)
 		$(".eventbox").css("display","block")
 		$(".eventbox>img").hide()
 		$(".eventbox>img").eq(num).hide().fadeIn(500)
 		
 	})
 	
 	
 	
 	
 	
 	$(".eventbox").click(function(){
 		$(this).css("display","none")
 		$(".lightbox").css("display","none")
 		
 		
 	})
 	/////////////////////////////about me
 	$(".me1>dl").hide().fadeIn(1200)
 	$(".me2>dl").hide().delay(150).fadeIn(1200)
 	$(".meimg").hover(function(){
 		
 		
 		
 		$(".meimg").stop().animate({height:640},1000)
 		$(".meimg img").eq(1).animate({opacity:1},1000)
 		$(".meimg img").eq(0).animate({opacity:0},1000)
 		
 		
 	},function(){
 		$(".meimg").stop().animate({height:68},1000)
		$(".meimg img").eq(0).animate({opacity:1},1000)
 		$(".meimg img").eq(1).animate({opacity:0},1000)
 	})
 	
 	
 	
 	
 	
 	/////////////////////mobile
 	$(".clear_fix li").hide().fadeIn(1000)
 	
 	//전체 나타나는 코드 끝
 	
 	
 	
 	 $(function (){
 	 	
 	 	$(".clear_fix>li").mouseover(function(){
 	 		
 	 	$(this).children("p").stop().hide().fadeIn(300)	
 	 		
 	 		
 	 	}).mouseout(function(){
 	 		
 	 	$(this).children("p").stop().fadeOut(300)		
 	 	})
 	 	
 	 	
	
 	 	
 	 	
 	 	
 	 	
 	 	
 	
 	 $(".clear_fix li").css("cursor","pointer")
 	 	
 	 	
 	 	
	 $(".clear_fix li").eq(0).click(function (){
		$(".iview").find("img").attr("src","images/mobile0.jpg")
	 })
	  $(".clear_fix li").eq(1).click(function (){
		$(".iview").find("img").attr("src","images/mobile1.jpg")
	 })
	   $(".clear_fix li").eq(2).click(function (){
		$(".iview").find("img").attr("src","images/mobile2.jpg")
	 })
	   $(".clear_fix li").eq(3).click(function (){
		$(".iview").find("img").attr("src","images/mobile3.jpg")
	 })
	   $(".clear_fix li").eq(4).click(function (){
		$(".iview").find("img").attr("src","images/mobile4.jpg")
	 })
	 	 })
	   $(".clear_fix li").eq(5).click(function (){
		$(".iview").find("img").attr("src","images/mobile5.jpg")
	 })


  	

	 $(".clear_fix li").eq(0).click(function(){
	 	$(".tex dl").css("display","none")
		$(".tex dl").eq(0).css("display","block")
	 })
	 
	  $(".clear_fix li").eq(1).click(function(){
	  	$(".tex dl").css("display","none")
		$(".tex dl").eq(1).css("display","block")
	 })
	 
	   $(".clear_fix li").eq(2).click(function(){
	   	$(".tex dl").css("display","none")
		$(".tex dl").eq(2).css("display","block")
	 })
	 
	   $(".clear_fix li").eq(3).click(function(){
	   	$(".tex dl").css("display","none")
		$(".tex dl").eq(3).css("display","block")
	 })
	 
	 $(".clear_fix li").eq(4).click(function(){
	 	$(".tex dl").css("display","none")
		$(".tex dl").eq(4).css("display","block")
	 })
	 $(".clear_fix li").eq(5).click(function(){
	 	$(".tex dl").css("display","none")
		$(".tex dl").eq(5).css("display","block")
	 })
	 
	 
	 $("#indicator p").hide().fadeIn(300).animate({"left":"-55px"},2000).animate({"left":"100px"},2000).animate({"left":"50"},2000)
	
})

