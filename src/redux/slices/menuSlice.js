import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	isOpen: false,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState: INITIAL_STATE,
	reducers: {
		toggleMenu: (state, action) => {
			state.isOpen = !state.isOpen;
		},
		closeMenu: (state) => {
			state.isOpen = false;
		},
	},
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
