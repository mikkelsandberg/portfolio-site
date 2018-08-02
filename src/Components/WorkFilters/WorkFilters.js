import React from 'react';
import { connect } from 'react-redux';
import { setWorkFilter } from '../../actions';
import Filters from '../../Util/Filters';
import './WorkFilters.css';
import { FormatText } from '../../Util/HelperFunctions';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => ({
	activeFilter: state.workFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: e => dispatch(setWorkFilter(FormatText(e.target.innerHTML))),
});

const WorkFilters = props => {
	const { activeFilter, onClick } = props;

	return (
		<ul className="filters__list">
			{Filters.map(filter => {
				return (
					<li
						key={filter.id}
						onClick={onClick}
						className={`filter${
							activeFilter === FormatText(filter.name) ? ' filter--active' : ''
						} filter--${filter.color}`}
					>
						{filter.name}
					</li>
				);
			})}
		</ul>
	);
};

WorkFilters.propTypes = {
	activeFilter: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WorkFilters);
