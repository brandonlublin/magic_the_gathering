import React, {Component} from 'react';
import './style.css';
import {Col, Select} from 'react-materialize';

class Sort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: 'name'
		};
	}

	handleOnInputChange = event => {
		//listen for event, and alter state based off selected value from drop down
		const selectedValue = event.target.value;

		if (this.state.selectedValue !== selectedValue) {
			this.setState({ selectedValue: selectedValue }, () => {
				this.props.onDropdownChange(this.state.selectedValue);
			});
		}
	};
	

	renderSelect() {
		return (
			//element wasn't rendering properly when pulling from Materialize package, so manually added src code here from npm package
			<Select className='search-label' onChange={this.handleOnInputChange} options={{
				classes: 'search-label',
				dropdownOptions: {
				alignment: 'left',
				autoTrigger: true,
				closeOnClick: true,
				constrainWidth: true,
				container: null,
				coverTrigger: true,
				hover: false,
				inDuration: 150,
				onCloseEnd: null,
				onCloseStart: null,
				onOpenEnd: null,
				onOpenStart: null,
				outDuration: 250
				}
			}} value={this.state.selectedValue}>
				<option disabled='disabled' value=''>
						Filter By:
				</option>
				<option value='name'>Name</option>
				<option value='artist'>Artist</option>
				<option value='set'>Set</option>
			</Select>
		)
	}
	render() {
		return (
			<div className='container'>
				<Col s={4} m={4} l={4}>
					{this.renderSelect()}
				</Col>
			</div>	
		)
	}
}
export default Sort;