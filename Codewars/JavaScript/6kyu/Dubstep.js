function songDecoder(song){
  var regex = /WUB/g
  return song.replace(regex,',').split(',').filter( x => x!= '').join(' ')
}
