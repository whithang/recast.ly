class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: props.videos,
      video: props.videos[0],
      searchText:'' 
    };
  }

  onVideoClick(video) {
    this.setState({
      video: video
    });
  }

  onSearchClick(text) {
    this.setState({
      searchText: text
    });
    this.executeYouTubeSearch(text);
  }

  executeYouTubeSearch(text) {
    searchYouTube(text, function(data) {
      this.setState({
        videos: data,
        video: data[0]
      });
    });
    this.render();
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search mySearch = {this.onSearchClick.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video = {this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos = {this.state.videos} myClick = {this.onVideoClick.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
