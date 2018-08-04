import React from 'react';
import { connect } from 'react-redux';
import { setWorkFilter } from '../../actions';
import Filters from '../../Util/Filters';
import './WorkFilters.css';
import { FormatText } from '../../Util/HelperFunctions';

function mapStateToProps(state) {
	return {
		workFilter: state.workFilter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onClick: e => dispatch(setWorkFilter(FormatText(e.target.innerHTML)))
	};
}

function WorkFilters(props) {
	const { workFilter, onClick } = props;

	return (
		<ul className="filters__list">
			{Filters.map(filter => {
				return (
					<li
						key={filter.id}
						onClick={onClick}
						className={`filter${workFilter === FormatText(filter.name) ? ' filter--active' : ''} filter--${
							filter.color
						}`}
					>
						{filter.name}
					</li>
				);
			})}
		</ul>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkFilters);
