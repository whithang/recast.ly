// TODO: Render the `App` component to the DOM
var defaultVideo = [{
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0
      },
      medium: {
        url: '',
        width: 0,
        height: 0
      },
      high: {
        url: '',
        width: 0,
        height: 0
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
}];

ReactDOM.render(
  <App searchYouTube={window.searchYouTube} video={defaultVideo}/>, document.getElementById('app')
);
 