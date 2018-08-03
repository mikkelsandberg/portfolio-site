import {
	SET_WORK_FILTER,
	TOGGLE_MOBILE_MENU_VIS,
	SET_MOBILE_MENU_VIS,
	SET_CLEAR_OF_HEADER,
} from './constants';

const initialState = {
	workFilter: 'show-all',
	mobileMenuVisible: false,
	clearOfHeader: true,
};

export function portfolioApp(state = initialState, action = {}) {
	switch (action.type) {
		case SET_WORK_FILTER:
			return { ...state, workFilter: action.payload };
		case TOGGLE_MOBILE_MENU_VIS:
			return { ...state, mobileMenuVisible: !state.mobileMenuVisible };
		case SET_MOBILE_MENU_VIS:
			return { ...state, mobileMenuVisible: action.payload };
		case SET_CLEAR_OF_HEADER:
			return { ...state, clearOfHeader: action.payload };
		default:
			return initialState;
	}
}
