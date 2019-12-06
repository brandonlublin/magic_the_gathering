import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
            results: {},
            loading: false,
            message: '',
		};
	}
	render() {
		return (
			<div className="container">
				{/*Heading*/}
				{/* Search Input */}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
			</div>
			)
	}
}
export default Search;