var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$(document).ready(function(){
  console.log('all ready');
$('.color-button').on('click', function(){
  var $thisColor = $(this).data("color");
  colorCounter($thisColor);

});





function colorCounter (color) {
  $('.container').append('<div class="color-cube ' + color + '"></div>');
  if (color == 'red'){
    redCount++;
    $('#red').append(redCount);
  }else if (color == 'yellow') {
    yellowCount++;
    $('#yellow').append(yellowCount);
  }else if (color == 'green') {
    greenCount++;
    $('#green').append(greenCount);
  }else if (color == 'blue'){
    blueCount++;
    $('#blue').append(blueCount);
  }

}


});
// if (this.data == 'red'){
//   redCount++;
//   $('#red').append(redCount);
// } else if (this.data == 'yellow') {
//   yellowCount++;
//   $('#yellow').append(yellowCount);
// } if else (this.data = 'green') {
//   greenCount++;
//   $('#green').append(greenCount);
// } else {
//   blueCount++;
//   $('#blue').append(blueCount);
// }
