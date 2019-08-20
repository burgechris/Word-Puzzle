//Front-end logic

$(document).ready(function(){
  $('button').click(function(){
    $('#result').toggle();
    $('#output').toggle();
  });

  $('#output').text();
    var string = $('#result').text();
    var newString = makePuzzle(string);
    $('#output').text(newString);

});

//Back-end logic

var makePuzzle = function(string){

  var newString = '';

  for(var count = 0; count < string.length; count += 1) {
    var letter = string.charAt(count);
    if ((letter === 'a' || letter === 'e')|| ((letter === 'i' || letter === 'o') || (letter === 'u'))) {
      letter = '-';
    }
    newString += letter;
  }
  return newString;
}
