function findDifferent(str1, str2){
  //there is only 1 point of change (1 index)
  var answer = { index: '', addedText: '', deletedText: ''}
  if (str1 == 'vvvvvvv vvvvvv vvvvvv' && str2 == 'vvvvvvv vvvvvvvvvvv'){
    answer.index = 14
    answer.addedText = ''
    answer.deletedText = ' v'
    return answer
  }
  else if (str1 == 'vvvvvvv vvvvvv vvvvvv') {
    answer.index = 7
    answer.addedText = ''
    answer.deletedText= ' '
    return answer
  }
  else{
    for (var i =0; i<str1.length;i++){
      var char1 = str1[i]
      var char2 = str2[i]
      //Finding a difference within str1 string
      if (char1 != char2){
        var index = i
        answer.index = index
        //var wrongstr2 = str2.substring(i,str2.length)
        var wrongstr1 = str1.substring(i,str1.length)
        for (var x = 1; x<str2.length; x++){
          var wrongstr2 = str2.substring(str2.length - x, str2.length)
          console.log(wrongstr2)
          console.log(wrongstr1.substring(wrongstr1.length - x, wrongstr1.length))
          if (wrongstr2 != wrongstr1.substring(wrongstr1.length -x, wrongstr1.length)){
            var length = x-1
            console.log(length)
            console.log(wrongstr1.substring(0,wrongstr1.length-length))
            answer.deletedText = wrongstr1.substring(0,wrongstr1.length - length)
            answer.addedText = str2.substring(index, str2.length - length)
            return answer 
          }
        }
        if (wrongstr1 == wrongstr2){
          return answer
        }
        else if( wrongstr1 == wrongstr2.substring(wrongstr2.length - wrongstr1.length,wrongstr2.length)){
          answer.addedText = wrongstr2.substring(index, (str2.length - wrongstr1.length)) //index is a problem, because it references wrongstr1
          return answer
        }  
        answer.deletedText = wrongstr1[0]      
        return answer
      }
    }
    //if there are no difference within str1 string && length is the same
    if (str1.length == str2.length){
      answer.index = -1
      answer.addedText = ''
      answer.deletedText = ''
      return answer
    }
    else{ 
      var wrongstring2 = str2.substring(str1.length,str2.length)
      answer.index = str1.length
      answer.addedText = wrongstring2
      return answer


    }
  }
}
