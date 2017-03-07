$(function() {

  var player = 'O';

  $('.box').click(function() {
    // gets the text value
    var value = $(this).text();

    if (value === '') { // if unoccupied
      $(this).text(player);
      // alternate the player
      if (player === 'O') {
        player = 'X';
      } else { // assumed is X
        player = 'O';
      }
    }
    var newValue = $(this).text();
    console.log(newValue);
  }); // End of .box click

}); // End of document ready
