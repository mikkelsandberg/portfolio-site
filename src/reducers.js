import { CHANGE_WORK_FILTER } from './constants';

const initialState = {
	workFilter: 'show-all',
};

export const setWorkFilter = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_WORK_FILTER:
			return Object.assign({}, state, { workFilter: action.payload });
		default:
			return state;
	}
};
