function validParentheses(parens){
    if (parens.length == 0) return true 
    function replacement (string) {
      var regex = /\(\)/g;
      var replace = string.replace(regex,'')
      if (replace.length % 2 == 0 && replace.length == 0){
        return true
      }
      else if (replace.length % 2 == 0){
        if (regex.test(replace)){
          return replacement(replace)
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }  
  return replacement(parens)
}
