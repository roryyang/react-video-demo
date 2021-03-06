import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAOBMLKLWGVyQCwnArRPJ_YXb0DyRjP58o";
//allow us to make requests to Youtube

class App extends React.Component{ 

	constructor(){
		super();
		
		this.state={videos:[],
					selectedVideo:null
		};

		this.videoSearch('');
// Inside of the this.videoSearch is initial search, you can change it
	}
	videoSearch(term){
	YTSearch({key:API_KEY, term:term},(videos) => {
		this.setState({
			videos:videos,
			selectedVideo:videos[0]
		});
	});

}

//create a component that produce some HTML.
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},90000)
		return(
			<div>
				<Searchbar InputChangeTerm = { term => this.videoSearch(term) }/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 	videos = {this.state.videos}
							onVideoSelected = {selectedVideo => this.setState({selectedVideo})}/>
			</div>
		);
	}
}

//if videoList call the function with the video,the selectedVideo on the app will update


ReactDOM.render(<App/>,window.document.getElementById("app"));