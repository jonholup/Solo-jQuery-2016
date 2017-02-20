var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$(document).ready(function() {
  console.log('all ready');
  $('.color-button').on('click', function() {
    var $thisColor = $(this).data("color");
    colorCounter($thisColor);

  });
});

  function colorCounter(color) {
    $('.container').append('<div class="color-cube ' + color + '"></div>');
    if (color == 'red') {
      redCount++;
      $('#red').text(redCount);
    } else if (color == 'yellow') {
      yellowCount++;
      $('#yellow').text(yellowCount);
    } else if (color == 'green') {
      greenCount++;
      $('#green').text(greenCount);
    } else if (color == 'blue') {
      blueCount++;
      $('#blue').text(blueCount);
    }

  }
