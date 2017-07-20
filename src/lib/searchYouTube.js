var searchYouTube = (options, callback) => {
  console.log(options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      max: options.max,
      q: options.query,
      key: options.key,
      videoEmbeddable: true,
      type: 'video' 
    },
    dataType: 'json',
    success: function(data) {
      console.log('YouTube search success');
      callback(data.items);
    },
    error: function(data) {
      console.log('YouTube search failed', data);
    }
    
  });
};

window.searchYouTube = searchYouTube;

