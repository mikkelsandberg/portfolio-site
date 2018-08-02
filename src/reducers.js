import { CHANGE_WORK_FILTER } from './constants';

const initialState = {
	workFilter: 'show-all',
};

export function portfolioApp(state = initialState, action = {}) {
	switch (action.type) {
		case CHANGE_WORK_FILTER:
			return { ...state, workFilter: action.payload };
		default:
			return initialState;
	}
}
