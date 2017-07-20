var searchYouTube = (text, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      max: 5,
      q: text,
      key: YOUTUBE_API_KEY,
      videoEmbeddable: true,
      type: 'video' 
    },
    dataType: 'json',
    success: function(data) {
      console.log('YouTube search success');
      callback(data);
    },
    error: function(data) {
      console.log('YouTube search failed', data);
    }
    
  });
};

window.searchYouTube = searchYouTube;
