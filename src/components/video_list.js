import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {

    super(props);

    this.state = { videos: this.props.videos };
  }
  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.videoListItems()}
      </ul>
    );
  }

  videoListItems() {
    return this.props.videos.map((video) => {
      return <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        video={video}
        key={video.etag} />;
    });
  }
};

export default VideoList;
