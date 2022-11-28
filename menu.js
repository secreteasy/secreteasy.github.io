$(document).ready(function() {
     $(".menuToggle").click(function() {
       $(this).toggleClass("active");
       $('.menu').slideToggle(360, function(){
         if($(this).css('display') === "none"){
           $(this).removeAttr('style');
         }
       });
     });
   });


