$(function(){
//main slide 1 start

			var num=0,time=0,delay=3000,n=4
			var arrtop=[0,-20,-35,-55]
			
		function aaa(){
			
			$(".notice_ct").animate({top:arrtop[num]},500)
			
			
			
			clearInterval(time)
			time=setInterval(make,delay)	
			
			
			
		}	
	
		
		time=setInterval(make,delay)
		function make(){
			num++
			
			
			if(num>3){num=0
			$(".notice_ct").css("top","0px")
			
			

			
			}
			

			
			$(".notice_ct").animate({top:arrtop[num]},500)
		
		}
		//////////////////////////////////////////////////////
		
		$(".slide ul.s_circle li").click(function(){
			
			num=$(this).index()
			aaa()
		})
		
		
		
		
		//////////////////////////////////////////////////////
	
		$(".stop_bt a").click(function(){

		clearInterval(time)

		})

		$(".start_bt a").click(function(){

			time=setInterval(make,delay)
		})
		
		
		
// accordian

$(".ac_menu dt").click(function(){

$(".ac_menu dd").slideUp()
$(this).next().slideToggle()

})

})
