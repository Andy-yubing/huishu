$(function() {
	//轮播
	$(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,trigger:"click",interTime:"6000",delayTime:1000});
	//标签页 
	//$('#myTab li:eq(0) a').tab('show');
	$(".nav_list>li").click(function(event) {
		$(this).addClass('active').siblings('li').removeClass('active');
	});
	var x = document.getElementById("homePage_video");
	$(".homePage_advantage>div").on("mouseenter",function(){ 
		$(this).addClass('homePage_advantage_active').siblings('div').removeClass('homePage_advantage_active');
	}) 
	$("#playVideo").on("click",function(){
		$("#homePage_video")[0].play();
	})
})

