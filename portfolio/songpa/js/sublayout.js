$(function(){


//keyboard users and click function
$(".m_title a.title_txt").bind('focus',function(){
	$(".m_title .sub_s").slideUp()
	$(this).next("ul").slideToggle()
	return false;
})

//wing banner

$(".wing").click(function(){
	
		$("html,body").animate({scrollTop:0},350)
	
})
	
	})