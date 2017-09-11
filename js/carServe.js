$(function() {
    var num = 0;
    setInterval(function(){
    	$(".carFlow>li").eq(num).addClass('carFlow_active').siblings('li').removeClass('carFlow_active');
    	num ++;
    	if(num==9){
    		num = 0;
    	}
    },1500);
})