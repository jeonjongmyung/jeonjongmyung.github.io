$(function(){
	
	$(".popupwrap").hide()
	$(".popupwrap").slideDown(500)
	$(".pop_close").click(function(){
		
		$(".popupwrap").slideUp(500)
	})
	
	
// main tap menu


$(".tap_m li.tap_m_li").click(function(){
	
	$(".tap_m li.tap_m_li").removeClass("on")
	$(this).addClass("on")
	$("ul.tap_s").css("display","none")
	$(this).find("ul.tap_s").css("display","block")
	
	return false;
	
	
})

//keyboard user

$(".tap_m li.tap_m_li a.tap_m_info").bind("focus",function(){
	
	$(".tap_m li.tap_m_li").removeClass("on")
	$(this).parent().addClass("on")
	$(".tap_s").css("display","none")
	$(this).next().css("display","block")
	
	
})

//tab end

		var th = 94
   		var isPlay = false

   		$(".selector .list").css("height","0")
   		$(".selector .title").on("click",function(){
   			if(!isPlay){
		$(".selector .list").animate({height:th},500)
		}else{

			$(".selector .list").animate({height:0},500)


		}

		isPlay = !isPlay

   		})

//keyboard user


$(".selector .title").bind('focus',function(){
	
	$(this).next().animate({height:"94px"},500)
	
})

$(".list li:last a").bind("blur",function(){
	
	$(".selector .list").animate({height:0},500)
	
})













	
	
	
//main slide 1 start

var num=0,time=0,delay=3000,n=2
			
			
			
		function aaa(){
			
			$(".slideimg li").eq(num).hide().fadeIn()
			$(".slide_bt li").removeClass("bton")
			$(".slide_bt li").eq(num).addClass("bton")
			
			
			clearInterval(time)
			time=setInterval(make,delay)	
			
			
			
		}	
			
		$(".slideimg li").eq(0).hide().fadeIn()
		time=setInterval(make,delay)
		function make(){
			num++
			
			
			if(num>2){num=0
			
			
			

			
			}
			

			
			
			$(".slide_bt li").removeClass("bton")
			$(".slide_bt li").eq(num).addClass("bton")
			$(".slideimg li").hide().fadeOut()
			$(".slideimg li").eq(num).hide().fadeIn()
			
		}
	
		
		
		$(".slideimg li").hover(function(){
			clearInterval(time)
		},function(){
			time=setInterval(make,delay)
			
		})
	
$(".slide_bt li").click(function(){
	num=$(this).index()
	
	$(".slide_bt li").removeClass("bton")
	$(this).addClass("bton")
	
	$(".slideimg li").hide().fadeOut()
	$(".slideimg li").eq(num).hide().fadeIn()
	clearInterval(time)
	time=setInterval(make,delay)
	return false;
})	
	
	
//keyboard user

	
	

})
