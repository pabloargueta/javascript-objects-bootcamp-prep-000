var playlist = {
<<<<<<< HEAD
  'artist Names' : 'song names'
};


function updatePlaylist(playlist, artistName, songTitle){
=======
  
};


function playlist(playlist, artistName, songTitle){
>>>>>>> 874eb0bcf09cd034b4870ab096502dca9872c172
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}