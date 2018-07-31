import { CHANGE_WORK_FILTER } from './constants';

export const setWorkFilter = filter => ({
	type: CHANGE_WORK_FILTER,
	payload: filter,
});
