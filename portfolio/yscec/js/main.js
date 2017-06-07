$(function(){
	$(".box1").hover(function(){
		$(this).css("opacity","0.6")
		
	},function(){
		
		$(".box1").css("opacity","1")
	})
	
	
	$(".close_bt").click(function(){
		
		$(".close").slideToggle()
		
		
		
	})
	
	
})
