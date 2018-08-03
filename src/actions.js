import {
	SET_WORK_FILTER,
	TOGGLE_MOBILE_MENU_VIS,
	SET_MOBILE_MENU_VIS,
	SET_CLEAR_OF_HEADER,
} from './constants';

export const setWorkFilter = filter => ({
	type: SET_WORK_FILTER,
	payload: filter,
});

export const toggleMobileMenuVisible = visibility => ({
	type: TOGGLE_MOBILE_MENU_VIS,
	payload: visibility,
});

export const setMobileMenuVisible = visibility => ({
	type: SET_MOBILE_MENU_VIS,
	payload: visibility,
});

export const setClearOfHeader = isClear => ({
	type: SET_CLEAR_OF_HEADER,
	payload: isClear,
});
