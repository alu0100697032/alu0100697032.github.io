/*Anima la página subjects js*/
$(document).ready(function(){
   
   $(".totop").animate({
      bottom: '75px',
   }, "slow");
   /*Nav bar*/
   $(".nav-bar").animate({
      left: '100px',
   }, "slow");
   /*Table*/

   /*Title*/
   $(".title").animate({
      fontSize: '50px',
   }, "slow");
   $(".togle").click(function(){
      $(".table").slideToggle();
   });
   $(".togle").animate({
      fontSize: '50px',
      bottom: '75px',
   }, 'slow');
   $(".togle").mouseenter(function(){
      $(this).animate({
         opacity: '0.5',
      });
   });
   $(".togle").mouseleave(function(){
      $(this).animate({
         opacity: '1.0',
      });
   });
});