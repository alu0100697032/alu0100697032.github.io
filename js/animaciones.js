/*Anima la página subjects js*/
$(document).ready(function(){
   $(".title").animate({
      bottom: '100px',
      fontSize: '75px',
   }, "slow");
   $("#pl").animate({
      bottom: '100px',
   }, "slow");
   $("#opt").animate({
      bottom: '100px',
   }, "slow");
   $("#daa").animate({
      bottom: '100px',
   }, "slow");
   $(".nav-bar").animate({
      left: '100px',
   }, "slow");
   /*Table*/
   $(".table").animate({
      border: '5px solid',
   }, "slow");
   /*Title*/
   $(".title").click(function(){
      $(".table").slideToggle();
   });
});