import React, { Component } from 'react';
import Filters from '../../Util/Filters';
import './WorkFilters.css';
import { FormatText } from '../../Util/HelperFunctions';
import PropTypes from 'prop-types';

class WorkFilters extends Component {
	render() {
		const { activeFilter, handleFilterClick } = this.props;

		return (
			<ul className="filters__list">
				{Filters.map(filter => {
					return (
						<li
							key={filter.id}
							onClick={handleFilterClick}
							className={`filter${
								activeFilter === FormatText(filter.name)
									? ' filter--active'
									: ''
							} filter--${filter.color}`}
						>
							{filter.name}
						</li>
					);
				})}
			</ul>
		);
	}
}

WorkFilters.propTypes = {
	activeFilter: PropTypes.string.isRequired,
	handleFilterClick: PropTypes.func.isRequired,
};

export default WorkFilters;
