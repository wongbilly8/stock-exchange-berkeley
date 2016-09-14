// Click to expand text
// Kevin's method
// $("#card-container").children('li').each(function(i){
// 	if(!$(this).hasClass("place-holder")){
// 		$(this).click(function(){
// 			$(this).toggleClass("enlarged-card");
// 			$(this).find(".text").toggleClass("enlarged-card-text");
// 		});
// 	}
// });


$('.document-item').click(function(e) {
  $(this).addClass('enlarged-card');
  $(this).find(".text").addClass("enlarged-card-text");
  e.stopPropagation();
});

$('.close-button').click(function(e) {
	$('.enlarged-card').removeClass('enlarged-card');
	$('.enlarged-card-text').removeClass('enlarged-card-text');
	e.stopPropagation();
});

// $(document).click(function(e) {
//   $('.enlarged-card').removeClass('enlarged-card');
//   $('.enlarged-card-text').removeClass('enlarged-card-text');
//   e.stopPropagation();
// })

$('.document-item:after').click(function(e) {
  $('.enlarged-card').removeClass('enlarged-card');
  $('.enlarged-card-text').removeClass('enlarged-card-text');
  e.stopPropagation();
})


// hover to expand
// $("#card-container").children('li').each(function(i){
//  	if(!$(this).hasClass("place-holder")){
//  		$(this).hover(function(){
//  			$(this).toggleClass("enlarged-card");
//  			$(this).find(".text").toggleClass("enlarged-card-text");
//  		});
//  	}
//  });


// Open all links in each document-item in a new tab
$(".document-item a[href^='http://']").attr("target","_blank");
$(".document-item a[href^='https://']").attr("target","_blank")