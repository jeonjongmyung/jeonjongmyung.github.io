
$(function(){
///////////tapmenu
	$(".t_smenu_1").click(function(){
		
		$(".tab_sub_1").css("display","none")
		$(this).find("ul").css("display","block")
		$(".t_smenu_1 a").removeClass("tabon")
		$(this).find("a").not(".tab_s_s").addClass("tabon")
		return false;
		
	})
	
	$(".t_smenu_2").click(function(){
		$(".tab_sub_2").css("display","none")
		$(this).find("ul").css("display","block")
		$(".t_smenu_2 a").removeClass("tabon")
		$(this).find("a").not(".tab_s_s").addClass("tabon")
		return false;
		
		
	})
	

		

	
	
	
})
