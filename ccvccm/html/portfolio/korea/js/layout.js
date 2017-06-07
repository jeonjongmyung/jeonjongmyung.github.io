
$(function(){
	
$(".topmenu dl dd a.toplogin").animate({"background-color":"#c2d710","color":"#1f4620"},300)
$(".topmenu dl dd a").click(function(){
	
	$(this).animate({"background-color":"#c2d710","color":"#1f4620"},300)
	
	$(".topmenu dl dd a").css("background","none").css("color","#000000")
})	
	
//topmenu end

//gnb start

$(".depth_1 a.depth_1_mn").mouseenter(function(){

$("#headerwrap").stop().animate({height:"240px"},300)


})

$("#headerwrap").mouseleave(function(){

	$("#headerwrap").stop().animate({height:"104px"},300)
})

//tab 운용 


$(".depth_1 a.depth_1_mn").bind('focus',function(){

$("#headerwrap").stop().animate({height:"240px"},300)


})

$("li.g6 li:last").find("a").bind('blur',function(){


$("#headerwrap").stop().animate({height:"104px"},300)

})


//family site






//////////////////////////////////////////////

	// $(".mgnb li").mouseover(function(){
// 		
		// $(this).find("ul").css("display","block")
// 		
	// })

})
