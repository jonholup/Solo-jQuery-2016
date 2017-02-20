$(document).ready(function(){
  console.log('all ready');
$('.color-button').on('click', function(){
  var $thisColor = $(this).data("color");
  $('.container').append('<div class="color-cube ' + $thisColor + '"></div>');


});







});
