import React, { Component } from 'react';
import './style.css';
import { Col } from 'react-materialize';
import MagicCard from '../MagicCard';

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			query: ''
		}
	}

	renderSearchResults = () => {
		const { results } = this.state;
		//renders magic card for each returned search value
		if (Object.keys(results).length && results.length) {
			return (
				<div className='results-container'>
					{this.props.cards.map((card) => {
						return <MagicCard card={card} key={card.id}/>
					})}
				</div>
			);
		}
	};

	//listens for search value and updates state 
	handleOnInputChange = (event) => {
		const { query } = this.state;
		const { onSearchChange } = this.props;
		const value = event.target.value;

		if (query !== value) {
			this.setState({ query: value }, () => {
				onSearchChange(this.state.query)
			});
		}
	};
	render() {
		const { searchDisabled } = this.props;
		return (
			<div className='container'>
				{/*Heading*/}
				{/* Search Input */}
				<Col s={6} m={6} l={6}>
					<label className='search-label' htmlFor='search-input'>
						<input
							type='text'
							value={this.state.query}
							id='search-input'
							placeholder='Search...'
							onChange={this.handleOnInputChange}
							disabled={searchDisabled}
						/>
						<i className='fa fa-search search-icon'/>
					</label>
				</Col>
			</div>
			)
	}
}
export default Search;