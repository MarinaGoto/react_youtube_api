import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    //for each element of videos we will have a function that called
    // with single video and it will define our arrow function
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key= {video.etag}
                video={video}/>
        );
    });

  //const videos = props.videos;
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;