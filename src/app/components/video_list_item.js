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
//To get access to the video of VideoListItem, we have to say props.video
//也就是說:props.video是從VideoListItem裡繼承過來的
// {video} = const video = props.video ,這是ES6的寫法
//show single Video's thumbnail and title in the videolist
//Space for img like thumbnail, heading for media heading title
//whenever the user click on the li, the onClick function will update
export default VideoListItem;
