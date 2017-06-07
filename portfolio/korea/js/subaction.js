
$(function(){
	
	$(".history_tab li").click(function(){
		$(".history_tab li").removeClass("active_tab")
		$(this).addClass("active_tab")
		
		
	})
	
	
	
	$(".history_tab li").eq(0).click(function(){
		
	$(".history_contents dl").css("display","block")	
	return false;	
	})

	$(".history_tab li").eq(1).click(function(){
	
	
		
	
	$("dl.history_box").css("display","none")
	$(".history_contents dl").eq(0).css("display","block")
	return false;	
	})
	
	$(".history_tab li").eq(2).click(function(){
		
	$("dl.history_box").css("display","none")
	$(".history_contents dl").eq(1).css("display","block")	
	$(".history_contents dl").eq(2).css("display","block")	
	$(".history_contents dl").eq(3).css("display","block")	
	$(".history_contents dl").eq(4).css("display","block")	
	$(".history_contents dl").eq(5).css("display","block")	
	$(".history_contents dl").eq(6).css("display","block")	
	$(".history_contents dl").eq(7).css("display","block")	
	$(".history_contents dl").eq(8).css("display","block")	
	$(".history_contents dl").eq(9).css("display","block")	
	
	return false;
	})
	$(".history_tab li").eq(3).click(function(){
		
	$("dl.history_box").css("display","none")	
	$(".history_contents dl").eq(10).css("display","block")	
	$(".history_contents dl").eq(11).css("display","block")
	$(".history_contents dl").eq(12).css("display","block")	
		
	})
})
