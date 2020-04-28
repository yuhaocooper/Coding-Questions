function rot13(message){
  var fullcode = []
  for (var i = 0; i<message.length;i++){
    var code = message.charCodeAt(i)
    if (code > 64 && code < 78){
      var codechange = code + 13
      fullcode.push(codechange)
    }
    else if (code > 77 && code < 91){
      var codechange = code - 13
      fullcode.push(codechange)
    }
    else if (code > 96 && code <110){
      var codechange = code + 13
      fullcode.push(codechange)
    }
    else if (code > 109 && code < 123){
      var codechange = code - 13
      fullcode.push(codechange)
    }
    else{
      var codechange = code
      fullcode.push(codechange)
    }
  }
  return String.fromCharCode.apply(null,fullcode)
}
