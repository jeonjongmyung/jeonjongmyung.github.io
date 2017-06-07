// GNB
$(function(){
	$("#gnb>ul>li>a").mouseenter(function(){
		$("#gnb div").slideDown();
		$(".header_bg_gnb").slideDown();
	});
	$("#gnb").mouseleave(function(){
		$("#gnb div").slideUp();
		$(".header_bg_gnb").slideUp();
	});
	$("#gnb>ul>li>a").focus(function(){
		$("#gnb div").slideDown();
		$(".header_bg_gnb").slideDown();
	});
	$("#lnb a").focus(function(){
		$("#gnb div").slideUp();
		$(".header_bg_gnb").slideUp();
	});
	$("#gnb>ul>li>a").click(function(){
		$("#gnb div").slideDown();
		$(".header_bg_gnb").slideDown();
	});
});

// LNB
$(function(){
	var $lnb_item = $("#lnb li .not");
	$lnb_item.click(function(){
		$(this).next("ul").toggle();
	});
	$lnb_item.parent("li").next("li").addClass("off");
	$("#lnb li:last-child").addClass("last");
});

// Tab
$(function(){
	var $tabArea = $(".tab_area");
	var $tab = $(".tab_area .tab li");
	$tabArea.find(".detail").hide();
	$tabArea.find(".detail:first").show();
	$tab.find("a").click(function(){
		var idx = $(this).parent().index();
		$(this).parents("ul").parent().find(".detail").eq(idx).show().siblings(".detail").hide();
		$(this).parents("ul").find(">li>a").each(function(){
			$(this).parent().removeClass("on");
		});
		$(this).parent().addClass("on");
		return false;
	});
});

// SelecBox
$(function(){
	$(".selectbox").selectbox();
});

// print
var initBody;
function beforePrint(){
	initBody = document.body.innerHTML;
	document.body.innerHTML = '<div id="content">'+document.getElementById('content').innerHTML+'</div>';
}
function afterPrint(){
	document.body.innerHTML = initBody;
}
function PagePrint(){
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
	window.print();
}
function contentPrint() {
	var windowLeft = (screen.width-490)/2;
	//var windowTop = (screen.height-500)/2;
	var windowTop = 0;
	var printURL = "/resource/common/inc/printpage.jsp";
	 window.open(printURL,"content",'width=980, height=1000, menubar=yes, scrollbars=yes,status=no,resizable=yes,top=' + windowTop + ',left=' + windowLeft + '');
}


// file add
function fileBox(e){
	var $e = $(e);

	if ( $e.length == 0) return;

	var $file = $e.find("input:file");

	$file.change(function(){
		var val = $(this).val();
		$(this).siblings("input:text").val(val);
	});

}
$(document).ready(function(){
	fileBox('.file_box');
});


function _list(_url, _page) {
	var f = document.frm;
	console.log(11);
	if(f) {
		console.log(22);
		if(f.pageNo) f.pageNo.value = _page;
		console.log(33);
		
		f.encoding = "application/x-www-form-urlencoded";
		f.target = "";
		f.action = _url;
		f.submit();
	}
}

//ajax form.serialize 전송
function fnAjax(frmId,url,fn){
	$.ajax({
		url: url,
		type:"POST",
        data:  $("#"+frmId).serialize(),
        dataType:"json",
		success: function(data){
			if(fn) fn(data);
		},
	    error : function(request, status, error) {
			alert("에러코드 : " + request.status +"\n" + "메시지 :"+ request.responseText);
		}
	});
}



function _downloadBoardFile(_idx) {
	
	frm.fIdx.value=_idx;
	
	var success = function(response){
		if(response.flag == "Y"){
			fnFileDown("/sysadmin/downFile.cms",response.fileNm,response.fileUrl,response.filePath);
		}else{
			alert("파일이 없습니다. \n관리자에게 문의해주세요.");
		}
	}
	fnAjax("frm","/sysadmin/board/bbsDownFile.cms",success);
}



function fnFileDown(src,fileOrgNm,fileRealNm,filePath){
	var doc = document;
	if(((src != null && src != '') && (fileOrgNm !=null && fileOrgNm != '') && (fileRealNm !=null && fileRealNm != '') && (filePath !=null && filePath != '')) ){
		
		var form=doc.createElement("form");
		form.name = "downFrm";
		
		form.action = src;
		form.method = "post";
		form.target = "";
		doc.body.appendChild(form);
		
		var orgNm=doc.createElement("input");
		orgNm.type="hidden";
		orgNm.name="fileNm";
		orgNm.value=fileOrgNm;
		
		var realNm=doc.createElement("input");
		realNm.type="hidden";
		realNm.name="fileUrl";
		realNm.value=fileRealNm;
		
		var path=doc.createElement("input");
		path.type="hidden";
		path.name="filePath";
		path.value=filePath;
		
		form.appendChild(orgNm);
		form.appendChild(realNm);
		form.appendChild(path);
		
		form.submit();
		
		$("body").find("form[name='downFrm']").remove();
	}
}

