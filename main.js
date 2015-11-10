$(document).ready(function() {
   
    // bellow here starfunction.
   $('div#blue').click(function() {
       // below write if statement that brakes animate function 
       // when width == 200px

       // 
       $(this).animate({
           width: '+=20px'
       });


   });
   $('div#red').click(function() {
       $(this).animate({
           width: '+=20px'
       }); 
   });
   
});