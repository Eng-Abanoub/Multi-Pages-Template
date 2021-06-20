$(function(){
   console.log(5456554);
   $('.carousel').carousel({
      interval: false
    });
   $('.fa-cog').on('click',function(){
      $(this).siblings('.option-color').fadeToggle();
   });
   $('.option-color li').on('click',function(){
      console.log($(this).data('sheet'));
      $("link[href*='theme']").attr("href", $(this).attr("data-sheet"));
   });
   $('.up').on('click',function(){
      $("html").animate({scrollTop:0},500);
      console.log("click")
      
   });
   $(window).on('scroll',function(){
      if($(this).scrollTop() > 800){
        $('.up').fadeIn(); 
      }
      else
      $('.up').fadeOut(); 
   });

   $("html").niceScroll();

});

$(window).on('load',function(){
   $('.loading-screen .loading').fadeOut(1000,function(){
      $(this).parent().fadeOut(2000);
   });
      
});