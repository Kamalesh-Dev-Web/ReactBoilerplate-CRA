import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/CommonSlice';

function App() {
	console.log(process.env.REACT_APP_URL);
	const counter = useSelector((state) => state.common); // Access the counter state
	const dispatch = useDispatch();

	return (
		<Grid
			className="App"
			sx={{ background: (theme) => theme.palette.secondary.main }}
		>
			<Box
				onClick={() => dispatch(increment())}
				sx={{
					height: '100vh',
					color: (theme) => theme.palette.primary.main,
					cursor: 'pointer',
				}}
			>
				<img src={logo} className="App-logo" alt="logo" />
				<Typography>Please click on logo to increase count</Typography>
				<Typography>count:{counter}</Typography>
			</Box>
		</Grid>
	);
}

export default App;
