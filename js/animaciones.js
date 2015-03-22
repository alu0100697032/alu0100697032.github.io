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
   $(".title").click(function(){
      $(".table").slideToggle();
   });
   $(".title").animate({
      fontSize: '50px',
   }, "slow");
});