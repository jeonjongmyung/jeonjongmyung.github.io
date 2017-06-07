
$(function(){
	
var timerID = 0, num = 0, n = 4, delay = 3000
				var arrX = [0, -1000, -2000, -3000]
 	
 	
 	$(".visual").css("overflow","hidden")
		$(".imglist").width(4000)
		time=setInterval(make,delay)
		function make(){
			
			num++
					if (num == n) {
						num = 1
						$(".imglist").css("left", "0")
					}
					$(".imglist").animate({
						left : arrX[num]
					}, 400)

					$(".onbotton li").removeClass("on")
					$(".onbotton li").eq(num).addClass("on")

					if (num == 3) {
						$(".onbotton li").removeClass("on")
						$(".onbotton li").eq(0).addClass("on")
					}

				}
				

		
		$(".onbotton li").click(function(){
			num = $(this).index()
					$(".imglist").animate({
						left : arrX[num]
					}, 400)

					$(".onbotton li").removeClass("on")
					$(".onbotton li").eq(num).addClass("on")

					clearInterval(timerID)
					timerID = setInterval(make, delay)

	
			})
	
	

 	

$(".mainnext").click(function(){
 	
				num++
					if (num == n) {
						num = 1
						$(".imglist").css("left", "0")
					}

					$(".imglist").animate({
						left : arrX[num]
					}, 400)

					$(".onbotton li").removeClass("on")
					$(".onbotton li").eq(num).addClass("on")

					if (num == 3) {
						$(".onbotton li").removeClass("on")
						$(".onbotton li").eq(0).addClass("on")
					}

					clearInterval(timerID)
					timerID = setInterval(make, delay)
				})
 			
				$(".mainprev").click(function(){

				num--
					if (num < 0) {
						num = 2
						$(".imglist").css("left", "-3000px")
					}

					$(".imglist").animate({
						left : arrX[num]
					}, 400)

					$(".onbotton li").removeClass("on")
					$(".onbotton li").eq(num).addClass("on")

					clearInterval(timerID)
					timerID = setInterval(make, delay)
				})
			
			})
			
