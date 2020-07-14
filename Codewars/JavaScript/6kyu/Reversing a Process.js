function decode(r) {    
    //'a' starts at 0
    var dict = {
      'a': 0,
      'b': 1,
      'c': 2,
      'd': 3,
      'e': 4,
      'f': 5,
      'g': 6,
      'h': 7,
      'i': 8,
      'j': 9,
      'k': 10,
      'l': 11,
      'm': 12,
      'n': 13,
      'o': 14,
      'p': 15,
      'q': 16,
      'r': 17,
      's': 18,
      't': 19,
      'u': 20,
      'v': 21,
      'w': 22,
      'x': 23,
      'y': 24,
      'z': 25
    }
    var dictarr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var re = /\d+/;
    var key = r.match(re)
    if (key % 26 == 13 || key % 26 == 14 || key % 26 == 12 || key % 26 == 16 || key % 26 == 22 || key % 26 == 0 || key % 26 == 8 ||
       key % 26 == 6 || key % 26 == 24 || key % 26 == 4){
      return 'Impossible to decode'
    }
    var str = r.substr(key[0].length)
    var arr = str.split('')
    const number = arr.map(x => dict[x])
    const result = number.map( x => {
      for (var i = 0; i<26; i++){
        if (i * key % 26 == x){
          return dictarr[i]
        }
        else{
          continue
        }
      }
    })
    console.log(r)
    return result.join('')
}
