import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) =>{
		return <VideoListItem 
					onVideoSelected = {props.onVideoSelected}
					key = {video.etag}
					video = {video} />
	
	})

	
	return(
		<ul className="col-md-4 list-group">
		{videoItems} 
		</ul>
	);
};			

//Use 5 e-tag for each video as our key for each element in our VideoListItem array
export default VideoList;