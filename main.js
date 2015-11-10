$(document).ready(function() {
   $('div#blue').click(function() {
       $(this).animate({
           width: '+=10px'
       });
   });
   $('div#red').click(function() {
       $(this).animate({
           width: '+=10px'
       }); 
   });
   // $('div').click(function() {
   //     $(this).toggle(1000);
   // }); 
});