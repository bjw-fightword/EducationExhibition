$(function(){
	/*报名参会弹出框*/
	$('.sign-up').click(function(){
		if($('.fix-content').css('display')=='none'){
			$('.fix-content').slideDown();
		}else{
			$('.fix-content').slideUp();
		}
	})
	$(".contact").click(function(event){
		event.stopPropagation();
      	$("#mymodal").slideDown();
    });
    $(".btn").click(function(event){
    	event.stopPropagation();
      	$("#mymodal1").modal("toggle");
      	$("#mymodal").hide();
    });
    $('.close').click(function(){
          $("#mymodal").hide();
    })
   $(".bt-fix-left").click(function(event){
   		event.stopPropagation();
   		$("#mymodal2").modal("toggle");
   })
})