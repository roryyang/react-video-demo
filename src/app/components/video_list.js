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
//we create VideoLIst and we pass in the video as the property {video}, 這是要在VideoListItem裡使用的
//Use 5 e-tag for each video as our key for each element in our VideoListItem array
//props.videos.map 為從index.js所繼承之物件，需要先在index.js先行定義
//不然會出現Cannot read property 'map' of undefined
export default VideoList;