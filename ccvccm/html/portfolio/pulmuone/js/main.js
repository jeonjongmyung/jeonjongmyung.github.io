$(function(){
//main slide 1 start

			var num=0,time=0,delay=2000,n=6
			var arrleft=[0,-320,-640,-960,-1280,-1600]
			
		function aaa(){
			
			$(".sd_img").animate({left:arrleft[num]},300)
			$(".slide ul.s_circle li").removeClass("on")
			$(".slide ul.s_circle li").eq(num).addClass("on")
			
			
			clearInterval(time)
			time=setInterval(make,delay)	
			
			
			
		}	
			
		$(".slidwrap").css("overflow","hidden")
		$(".slidewrap ul.sd_img").width(1840)
		
		time=setInterval(make,delay)
		function make(){
			num++
			
			
			if(num>4){num=0
			$(".sd_img").css("left","0px")
			
			

			
			}
			

			
			$(".sd_img").animate({left:arrleft[num]},300)
			$(".slide ul.s_circle li").removeClass("on")
			$(".slide ul.s_circle li").eq(num).addClass("on")
			
			if(num==5){
			
			$(".slide ul.s_circle li").removeClass("on")
			$(".slide ul.s_circle li").eq(0).addClass("on")
			
			}
		}
		//////////////////////////////////////////////////////
		
		$(".slide ul.s_circle li").click(function(){
			
			num=$(this).index()
			aaa()
		})
		
		
		
		
		//////////////////////////////////////////////////////
		$(".slide p.s_prev").click(function(){
			num--
			
			if(num<0){num=4
			$(".imglist").css("left","920px")	
				
				}
			aaa()
			
		})
		
		
		
		
		
		////////////////////////////////////////////////////////
		$(".slide p.s_next").click(function(){
			num++
			if(num==5){num=0}
			aaa()
			
			
			
		})
		
		
		
		
		
		//////////////////////////////////////////////////////////
		var arrURL=[]
		arrURL[0]="index.html"
		arrURL[1]="index.html"
		arrURL[2]="index.html"
		arrURL[3]="index.html"
		
		
		$(".slidwrap").hover(function(){
			clearInterval(time)
		},function(){
			time=setInterval(make,delay)
			
		})
		$(".slidwrap").click(function(){
			window.open(arrURL[num])
			return false;
		})
		
//////////main slide 1 end///
//////////////////////////////////////main tabmenu start
$(".tapbd ul li.tapm a").click(function(){
	
	$(".tapbd ul li.tapm a").removeClass("tabon")
	$(this).not(".tabs").addClass("tabon")
	

	
})
	
	$(".tapbd ul li.tapm").click(function(){
		
	$(".tapbd ul li.tapm ul").css("display","none")
	$(this).find("ul").css("display","block")
	return false;
		
	})	
///////////main tabmenu end //

///////////new product start

$(".tapimg ul li.ti a").hover(function(){

$(".tapimg ul li.ti a").css("color","#ffffff")
$(this).css("color","#1f4620")
$(".tapimg ul li.ti ul").css("display","none")	

$(this).next("ul").css("display","block")	
	
	
	
})
//////////////////quick menu start
$(".quick ul li").mouseover(function(){
	var arr=[]
	arr[0]="images/qm1_1.jpg"
	arr[1]="images/qm2_1.jpg"
	arr[2]="images/qm3_1.jpg"
	arr[3]="images/qm4_1.jpg"
	arr[4]="images/qm5_1.jpg"
	var num=$(this).index()
	$(this).find("img").attr("src",arr[num])
	
	
}).mouseout(function(){
	var out=[]
	out[0]="images/qm1.jpg"
	out[1]="images/qm2.jpg"
	out[2]="images/qm3.jpg"
	out[3]="images/qm4.jpg"
	out[4]="images/qm5.jpg"
	var num=$(this).index()
	$(this).find("img").attr("src",out[num])
	
	
	
})
///////////////////////////////////
$(".sslidewrap").css("overflow","hidden")

var photoarr=[0,-180,-360,-540]
$(".sslidewrap ul").width(720)


var num=0

$(".prev").click(function(){
	
	num--
	
	if(num==-1){num=2}
	$(".sslidewrap ul").animate({"margin-left":photoarr[num]},100)
	return false;
})

$(".next").click(function(){
	
	num++
	
	if(num==4){num=0}
	$(".sslidewrap ul").animate({"margin-left":photoarr[num]},100)
	return false;
})

})
