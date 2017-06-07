
$(function(){
	
var timerID = 0, num = 0, n = 4, delay = 3000
				var arrX = [0, -328, -656, -984]
 	
 	
 	$(".cc_1").css("overflow","hidden")
		$(".r_view").width(1312)
		time=setInterval(make,delay)
		function make(){
			
			num++
					if (num == n) {
						num = 1
						$(".r_view").css("left", "0")
					}
					$(".r_view").animate({
						left : arrX[num]
					}, 400)

					$(".r_botton li").removeClass("on")
					$(".r_botton li").eq(num).addClass("on")

					if (num == 3) {
						$(".r_botton li").removeClass("on")
						$(".r_botton li").eq(0).addClass("on")
					}

				}
				

		
		$(".r_botton li").click(function(){
			num = $(this).index()
					$(".r_view").animate({
						left : arrX[num]
					}, 400)

					$(".r_botton li").removeClass("on")
					$(".r_botton li").eq(num).addClass("on")

					clearInterval(timerID)
					timerID = setInterval(make, delay)

	
			})
	
	

 	

$(".mainnext").click(function(){
 	
				num++
					if (num == n) {
						num = 1
						$(".r_view").css("left", "0")
					}

					$(".r_view").animate({
						left : arrX[num]
					}, 400)

					$(".r_botton li").removeClass("on")
					$(".r_botton li").eq(num).addClass("on")

					if (num == 3) {
						$(".r_botton li").removeClass("on")
						$(".r_botton li").eq(0).addClass("on")
					}

					clearInterval(timerID)
					timerID = setInterval(make, delay)
				})
 			
				$(".mainprev").click(function(){

				num--
					if (num < 0) {
						num = 2
						$(".r_view").css("left", "-3000px")
					}

					$(".r_view").animate({
						left : arrX[num]
					}, 400)

					$(".r_botton li").removeClass("on")
					$(".r_botton li").eq(num).addClass("on")

					clearInterval(timerID)
					timerID = setInterval(make, delay)
				})
			
			})
			
