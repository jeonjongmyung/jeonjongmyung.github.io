
$(function(){
	
var time = 0, num = 0, n = 4, delay = 3000
				var arrX = [0, -500, -1000, -1500]
 	
 	
 	$(".slide").css("overflow","hidden")
		$(".slideimg").width(2000)
		time=setInterval(make,delay)
		function make(){
			
			num++
					if (num == n) {
						num = 1
						$(".slideimg").css("left", "0")
					}
					$(".slideimg").animate({
						left : arrX[num]
					}, 400)

					$(".slidebt li").removeClass("on")
					$(".slidebt li").eq(num).addClass("on")

					if (num == 3) {
						$(".slidebt li").removeClass("on")
						$(".slidebt li").eq(0).addClass("on")
					}

				}
				

		
		$(".slidebt li").click(function(){
			num = $(this).index()
					$(".slideimg").animate({
						left : arrX[num]
					}, 400)

					$(".slidebt li").removeClass("on")
					$(".slidebt li").eq(num).addClass("on")

					clearInterval(time)
					time = setInterval(make, delay)

	
			})
			
			//////////////////퀵메뉴
				var rt = 250
	var slidePlay = false
	
	$(".quck_menu").css("right","0px")
	$(".quck_menu p.more").click(function(){
	if(!slidePlay){
	$(".quck_menu").animate({right:rt},300)	
	}else{
	$(".quck_menu").animate({right:0},300)	
	}
	slidePlay = !slidePlay
})
			
			
			
			
	
		/////////////////////스타트 정지
      $(".stop a").click(function(){
		 clearInterval(time)
			})
		$(".play a").click(function(){
		time=setInterval(make,delay)
      })
      

      
			
			
			})
			
