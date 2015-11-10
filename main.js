$(document).ready(function() {
   $('div#blue').click(function() {
       $(this).animate({
           width: '+=20px'
       });
   });
   $('div#red').click(function() {
       $(this).animate({
           width: '+=20px'
       }); 
   });
   // $('div').click(function() {
   //     $(this).toggle(1000);
   // }); 
});