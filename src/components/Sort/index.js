import React, { Component } from "react";
import "./style.css";
import { Col } from "react-materialize";

class Sort extends Component {
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
				{/* Sort Input */}
				<Col s={6} m={6} l={6}>
					<label className="sort-label" htmlFor="sort-input">
						<input
							type="text"
							value={this.state.query}
							id="search-input"
							placeholder="Sort..."
							onChange={this.handleOnInputChange}
						/>
						<i className="fa fa-search search-icon"/>
					</label>
				</Col>
			</div>
			)
	}
}
export default Sort;