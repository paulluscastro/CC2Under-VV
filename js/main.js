function underscore2CamelCase(text) {
  var converted = '';
  for (var i = 0; i < text.length; i++) {
    if (text[i] == '_')
      continue;

    converted += ((i > 0) && (text[i - 1] == '_')) ? text[i].toUpperCase() : text[i].toLowerCase();
  }

  return converted;
}

function camelCase2Underscore(text) {
  var converted = '';
  for (var i = 0; i < text.length; i++) {
    converted += ((text[i].charCodeAt() >= 65) && (text[i].charCodeAt() <= 90))  ? '_' + text[i].toUpperCase() : text[i].toUpperCase();
  }

  return converted;
}

$(document).ready(function(){

  $('#convert').on('click', function(){
    debugger;
    var camelCase = $('#camelCase2Underscore').is(':checked');

    if (camelCase) {
      $('#converted').val(camelCase2Underscore($('#original').val()));
    } else {
      $('#converted').val(underscore2CamelCase($('#original').val()));
    }
  });

});
