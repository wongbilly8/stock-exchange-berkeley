$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start-250 > offset.top-750) {
          $('.navbar-default').css('background-image', 'none');
          $('.navbar-default').css('background-color', 'rgba(86,52,68,0.8)');
          $('.navbar-default').css('height', '70px');

          $('.navbar-brand').css('font-size', '36px');
          $('.navbar-brand').css('margin-top', '12px');

          $('.nav').css('margin-top', '-24px');
       } else {
          $('.navbar-default').css('background-image', '');
          $('.navbar-default').css('background-color', '');
          $('.navbar-default').css('height', '');

          $('.navbar-brand').css('font-size', '');
          $('.navbar-brand').css('margin-top', '');

          $('.nav').css('margin-top', '0px');
       }
   });
});

