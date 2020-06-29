function decode(m) {

  var key = ['_\\\\~','\\\\/\\\\/','_T',
  '/\\\\','\\|\\\\/\\|','~\\|~','\\|\\-\\|','\\|_\\|','\\~/_','\\\\/','\\|\\\\\\|','\\(\\)_','\\(_,',
  '\\[\\-','\\|_','\\(\\)','\\]3','\\|\\^','\\|\\)','\\>\\<','__','`/','/\\?','/=','/\\<',
  '\\(','\\|',
  '\{','\\+','\\\\',"'",'\\}','\\.','\\]'
  ]
  var value = ['s','w','j',
  'a','m','t','h','u','z','v','n','q','g',
  'e','l','o','b','p','d','x',' ', 'y','r','f','k',
  'c','i',
  '','','','','','',''
  ]
  var newstr = m
  for (var i=0; i<key.length; i++){
    console.log(value[i])
    console.log(RegExp(key[i]))
    newstr = newstr.replace(new RegExp(key[i], "g"), value[i])
  }
  var final = newstr.split('').reverse().join('')
  return final
}
