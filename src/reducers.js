import {
	SET_WORK_FILTER,
	TOGGLE_MOBILE_MENU_VIS,
	SET_MOBILE_MENU_VIS,
	SET_CLEAR_OF_HEADER,
	SET_IMAGE_MODAL_VIS,
	OPEN_IMAGE_MODAL
} from './constants';

const initialState = {
	workFilter: 'show-all',
	mobileMenuVisible: false,
	clearOfHeader: true,
	imageIndex: 0,
	imageModalVis: false
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
		case SET_IMAGE_MODAL_VIS:
			return { ...state, imageModalVis: action.payload };
		case OPEN_IMAGE_MODAL:
			return { ...state, imageIndex: action.payload, imageModalVis: true };
		default:
			return initialState;
	}
}
