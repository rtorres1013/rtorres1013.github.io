$('#click-me').click(function(){

// Store your current age into a variable

  var age = $('#age').val();
  var maxAge = $('#max-age').val();
  var drink = $('#item').val();
  var numberperday = $('#num-per-day').val();

  var solution = (maxAge - age) * 365 * numberperday;
  // console.log(solution);
  $('#solution').html(solution);
  $('#drink').html(drink);
})
 
//   
// 

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// define the variales
// make a click function that gets the variables
// do the logic and the solution is html 

// Output your results to the user