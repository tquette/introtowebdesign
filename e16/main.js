$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('Fifthcharacter').toggleClass('black');
  });
  $('#number4').click(function() {
    $('Fourthcharacter').css('color', 'pink');
  });
});




$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
$('p').css('color', 'white');
// added a message to the console, helpful in debugging
console.log('added white');
$('body').toggleClass('bodyBG');
});
