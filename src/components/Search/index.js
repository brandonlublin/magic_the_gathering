import React, { Component } from "react";
import "./style.css";
import { Col } from "react-materialize";
import axios from "axios";

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

	fetchSearchResults = (updatedPageNo = '', query ) => {
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		// By default the limit of results is 20
		const searchUrl = `https://api.magicthegathering.io/v1/cards?types=creature&q=${query}&pageNum=${pageNumber}`;
		if (this.cancel) {
			// Cancel the previous request before making a new request
			this.cancel.cancel();
		}
		// Create a new CancelToken
		this.cancel = axios.CancelToken.source();
		axios
			.get(searchUrl, {
				cancelToken: this.cancel.token,
			})
			.then((res) => {
				const resultNotFoundMsg = !res.data.hits.length
					? 'There are no more search results. Please try a new search.'
					: '';
				this.setState({
					results: res.data.hits,
					message: resultNotFoundMsg,
					loading: false,
				});
			})
			.catch((error) => {
				if (axios.isCancel(error) || error) {
					this.setState({
						loading: false,
						message: 'Failed to fetch results.Please check network',
					});
				}
			});
	};

	renderSearchResults = () => {
		const {results} = this.state;
		if (Object.keys(results).length && results.length) {
			return (
				<div className="results-container">
					{results.map((result) => {
						return (
							<a key={result.id} href={result.previewURL} className="result-items">
								<h6 className="image-username">{result.user}</h6>
								<div className="image-wrapper">
									<img className="image" src={result.previewURL} alt={result.user}/>
								</div>
							</a>
						);
					})}
				</div>
			);
		}
	};

	handleOnInputChange = (event) => {
		const query = event.target.value;
				this.setState({ query, loading: true, message: ''  } );
	};
	render() {
		return (
			<div className="container">
				{/*Heading*/}
				{/* Search Input */}
				<Col s={6} m={6} l={6}>
					<label className="search-label" htmlFor="search-input">
						<input
							type="text"
							value={this.state.query}
							id="search-input"
							placeholder="Search..."
							onChange={this.handleOnInputChange}
						/>
						{ this.renderSearchResults() }
						<i className="fa fa-search search-icon"/>
					</label>
				</Col>
			</div>
			)
	}
}
export default Search;