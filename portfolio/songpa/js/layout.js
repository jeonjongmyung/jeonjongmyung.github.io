$(function(){
$(".gnb_title a.gnb_bt").mouseenter(function(){
	$("#headerwrap").animate({height:"340px"},300)
})
$("#headerwrap").mouseleave(function(){
	$("#headerwrap").animate({height:"116px"},300)
})


/////////////////탭운용
$(".gnb_title a.gnb_bt").bind('focus',function(){
$("#headerwrap").stop().animate({height:"340px"},300)
})
$(".gnb_mn li:last").find("a").bind('blur',function(){
$("#headerwrap").stop().animate({height:"116px"},300)
})



})
