import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './CommonSlice';

const store = configureStore({
	reducer: {
		common: commonReducer,
		// Add more reducers as needed
	},
});

export default store;
