import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
	name: 'common',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

export const { increment, decrement } = commonSlice.actions;
export default commonSlice.reducer;
