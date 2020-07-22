/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 * 
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
function parseCSV(input, separator, quote) {
  separator = separator || ',';
  quote = quote || '"';
  //soln: replace all separator and quotes with regex, then split into arr, then iterate and push accordingly.
  var output = []
  var temp = []
  var start = 0
  var length = input.length
  var end = input.indexOf(separator)
  var tempstr = input
  var str = ''
  var regquote = quote
  console.log(input)
  if (input.length == 0){
    temp.push('')
    output.push(temp)
    return output
  }
  while (end != -1){
    if (tempstr[0] == quote && tempstr[1] == quote){
      temp.push('')
      tempstr = tempstr.slice(3)
      end = tempstr.indexOf(separator)
    }
    if (tempstr[0] == quote){
      if (quote == '\$'){
        var regquote = '\\$'
      }
      else if (quote == '\\'){
        var regquote = '\\\\'
      }
      var quotes = new RegExp(regquote.concat(regquote), 'g')
      var quotestr = tempstr.replace(quotes,'xx').slice(1)
      console.log(quotestr)
      end = quotestr.indexOf(quote)
      str = quotestr.slice(start,end)
      console.log(end)
      const regex = /xx/g
      str = str.replace(regex,quote)
      temp.push(str)
      console.log(quotestr[end+1])
      if (quotestr[end+1] == separator){
        tempstr = quotestr.slice(end + 2)
      }
      else if (quotestr[end+1] == undefined){
        output.push(temp)
        return output
      }
      else {
        tempstr = quotestr.slice(end+1)
        output.push(temp)
        temp = []
        tempstr = tempstr.slice(1)
      }
      if (tempstr[0] != quote){
        end = tempstr.indexOf(separator)
      }
      else{
        end = tempstr.length
      }
    }
    else {
      str = tempstr.slice(start, end)
      if (str.indexOf("\n") != -1){
        end = str.indexOf("\n")
        str = str.slice(0,end)
        temp.push(str)
        output.push(temp)
        temp = []
        tempstr = tempstr.slice(end + 1, length)
      }
      else{
        temp.push(str)
        tempstr = tempstr.slice(end + 1, length)
      }
      if (tempstr[0] != quote){
        end = tempstr.indexOf(separator)
      }
      else{
        end = tempstr.length
      }
    }
    if (end == -1){ //Handling the final case
      temp.push(tempstr)
      output.push(temp)
    }
  }
  return output
}
