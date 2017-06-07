$(function(){
	$(".t_smenu a").not(".sub1 a").click(function(){
		$(".tab_sub").css("display","none")
		$(".t_smenu a").css("font-weight","normal").css("text-decoration","none")
		$(this).next().css("display","block")
		$(this).css("font-weight","bold").css("text-decoration","underline")
		return false;
		
		
		
	})
	
	
	
})
