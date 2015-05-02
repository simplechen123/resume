$(function(){
	var $w_width = $(window).width(),
		$w_height = $(window).height();
	$("#view").width($w_width).height($w_height);

	var now = { row:1, col:1 }, last = { row:0, col:0};
	const towards = { up:1, right:2, down:3, left:4};
	var isAnimating = false;

	var count = $("#view .container").length;
	$(document).swipeUp(function(){
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row != count) {
			now.row = last.row+1; 
			now.col = 1; 
			pageMove(towards.up);
		}
	});
	$(document).swipeDown(function(){
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row!=1) { 
			now.row = last.row-1; 
			now.col = 1; 
			pageMove(towards.down);
	}
	});

	function pageMove(tw){
		var lastPage = ".page-"+last.row+"-"+last.col,
			nowPage = ".page-"+now.row+"-"+now.col;
	
		switch(tw) {
			case towards.up:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case towards.right:
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case towards.down:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case towards.left:
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFromRight';
				break;
		}

		isAnimating = true;
		$(nowPage).removeClass("hide");	
		$(lastPage).addClass(outClass);
		$(nowPage).addClass(inClass);
		
		setTimeout(function(){
			$(lastPage).removeClass('page-current');
			$(lastPage).removeClass(outClass);
			$(lastPage).addClass("hide");
			// $(lastPage).find("img").addClass("hide");
		
			$(nowPage).addClass('page-current');
			$(nowPage).removeClass(inClass);
			// $(nowPage).find("img").removeClass("hide");
		
			isAnimating = false;
		},600);
	}










	// var $top = 0,
	// 	$len = $(".container").length;
	// $(".clone").clone().appendTo("#view");
	// $(".container").on("click",function(){
	// 	var page = $(this).index()+1;
	// 	var timer = setInterval(function(){
	// 		if($top<=page*$w_height){
	// 			$top += $w_height/30;
	// 			 $("#view").scrollTop($top);
	// 			if(page == $len + 1){
	// 				$top=0;page=1;
	// 			}
	// 		}else{
	// 			clearInterval(timer);
	// 		}				
	// 	},30);		
	// });

	// $("#view").scrollTop($w_height*3);
	// $(".container").on("click",function(){
	// 	var page = $(this).index()+1;
	// 	var timer = setInterval(function(){
	// 		if($top<=page*$w_height){
	// 			$top -= $w_height/30;
	// 			$("#view").scrollTop($top);
	// 		}
	// 		else{
	// 			clearInterval(timer);
	// 		}				
	// 	},30);
	// });
});