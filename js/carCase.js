$(function(){
	$(".nav_list>li").click(function(event) {
		$(this).addClass('active').siblings('li').removeClass('active');
	});

	$("#case_select_Tab>li").on("click",function(){
		 $("#case_select_content").css("display","block");
		 $(".case_select_content_text").css("display","none");
	})

	$(document).on("click","#case_select_content .active>ul>li>h3>a",function(){
		 $("#case_select_content").css("display","none");
		 $(".case_select_content_text").css("display","block");
	})
	
})