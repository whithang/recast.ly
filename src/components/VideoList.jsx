var VideoList = (props) => (
  <div className="video-list">
    <div><h5>{props.videos.map(video =>
      <VideoListEntry videos = {video} />
    )} 
    </h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;