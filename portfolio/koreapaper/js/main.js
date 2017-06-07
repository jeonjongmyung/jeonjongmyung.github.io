$(function(){

		$(function() {
		$(".bt_right dl.ac_menu dt").click(function(){
		$(".bt_right dl.ac_menu dt").removeClass("on")
		$(this).addClass("on")
		$(".bt_right dl.ac_menu dd").slideUp()
		$(this).next().slideDown()
			})
			
			
		})

	////Family site button

	
	var select_root = $('div.select');
	var select_value = $('.my_value');
	var select_a = $('div.select>ul>li>a');
	var select_input = $('div.select>ul>li>input[type=radio]');
	var select_label = $('div.select>ul>li>label');
	
	
	$('div.my_value').each(function(){
		var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	
	select_value.bind('focusin',function(){$(this).addClass('outLine')});
	select_value.bind('focusout',function(){$(this).removeClass('outLine')});
	select_input.bind('focusin',function(){$(this).parents('div.select').children('div.my_value').addClass('outLine')});
	select_input.bind('focusout',function(){$(this).parents('div.select').children('div.my_value').removeClass('outLine')});
	
	
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	
	
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
	
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}
	
	
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}

	
	$('*:not("div.select a")').focus(function(){
		$('.a_list').parent('.select').removeClass('open');
	});
			
	select_value.click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	select_label.hover(i_hover).click(hide_option);

///////////family site end

//center slide 

$("ul .thumb_s").hover(function(){
var num=$(this).index()
$(this).find("ul").css("display","block")
if(num==0){$("p.anc").stop().animate({"top":"15px"},300)}
if(num==1){$("p.anc").stop().animate({"top":"59px"},300)}
if(num==2){$("p.anc").stop().animate({"top":"102px"},300)}
if(num==3){$("p.anc").stop().animate({"top":"148px"},300)}
if(num==4){$("p.anc").stop().animate({"top":"192px"},300)}	
},function(){

$(".c_s").css("display","none")
$(".c_s_01").css("display","block")
$("p.anc").stop().animate({"top":"15px"},300)
})

///////////////////tabmenu
$(".tabmenu ul.tabmain li.t_smenu a").click(function(){
	
	$(".tabmenu ul.tabmain li.t_smenu a").removeClass("tabon")
	$(this).not(".tab_s_s").addClass("tabon")
	

	
})
	
	$(".tabmenu ul.tabmain li.t_smenu").click(function(){
		
	$(".tabmenu ul.tabmain li.t_smenu ul.tab_sub").css("display","none")
	$(this).find("ul").css("display","block")
	return false;
		
	})	

	$("ul.tab_sub li a.tab_s_s").hover(function(){

		$(this).stop().animate({"opacity":"0.5"},300)
	},function(){

		$("ul.tab_sub li a.tab_s_s").stop().animate({"opacity":"1"},300)
	})

})
