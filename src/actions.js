import {
	SET_WORK_FILTER,
	TOGGLE_MOBILE_MENU_VIS,
	SET_MOBILE_MENU_VIS,
	SET_CLEAR_OF_HEADER,
	SET_IMAGE_MODAL_VIS,
	OPEN_IMAGE_MODAL
} from './constants';

export const setWorkFilter = filter => ({
	type: SET_WORK_FILTER,
	payload: filter
});

export const toggleMobileMenuVisible = visibility => ({
	type: TOGGLE_MOBILE_MENU_VIS,
	payload: visibility
});

export const setMobileMenuVisible = visibility => ({
	type: SET_MOBILE_MENU_VIS,
	payload: visibility
});

export const setClearOfHeader = isClear => ({
	type: SET_CLEAR_OF_HEADER,
	payload: isClear
});

export const setImageModalVis = visibility => ({
	type: SET_IMAGE_MODAL_VIS,
	payload: visibility
});

export const openImageModal = index => ({
	type: OPEN_IMAGE_MODAL,
	payload: index
});
