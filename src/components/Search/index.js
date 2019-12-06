import React, { Component } from "react";
import "./style.css";
import { Col } from "react-materialize";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
            results: {},
            loading: false,
            message: "",
		};
	}

	handleOnInputChange = (event) => {
		const query = event.target.value;
				this.setState({ query, loading: true, message: ''  } );
	};
	render() {
		return (
			<div className="container">
				{/*Heading*/}
				{/* Search Input */}
				<Col s={5} m={5} l={5}>
					<label className="search-label" htmlFor="search-input">
						<input
							type="text"
							value={this.state.query}
							id="search-input"
							placeholder="Search..."
							onChange={this.handleOnInputChange}
						/>
						<i className="fa fa-search search-icon"/>
					</label>
				</Col>
			</div>
			)
	}
}
export default Search;