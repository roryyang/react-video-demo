import React from 'react';

class Searchbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {term:''};
	} 

	render(){
		return(
			<div className= "search-bar">
				<input 
					value={this.state.term}
					onChange = {(event) => {this.InputChangeTerm(event.target.value)}} />
			</div>
		);
	}

	InputChangeTerm(term){
		this.setState({term});
		this.props.InputChangeTerm(term);
	}
}

export default Searchbar;