// Redux toolkit
import { configureStore } from '@reduxjs/toolkit';
// Redux reducers
import menuSlice from './slices/menuSlice';

// Redux Store
export const store = configureStore({
	reducer: {
		menu: menuSlice,
	},
});
