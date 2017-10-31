import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
	
//	const video = props.video;
//if index.js add {onVideoSelected}, then videoListItem has access to the property called onvideoSelected
	const imgUrl = video.snippet.thumbnails.default.url;

	return(	
		<li onClick = {() => {onVideoSelected(video)}} className = "list-group-item">

			<div className = "video-list media">
			<div className = "media-left">
				<img className = "media-object" src = {imgUrl} />
			</div>
			<div className = "media-body">
				<div className = "media-heading" >{video.snippet.title}</div>
			</div>
		</div>
		</li>
	);
};

//show single Video's thumbnail and title in the videolist

export default VideoListItem;
