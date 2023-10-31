import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';

function App() {
	console.log(process.env.REACT_APP_URL);
	return (
		<Grid
			className="App"
			sx={{ background: (theme) => theme.palette.secondary.main }}
		>
			<Box
				sx={{ height: '100vh', color: (theme) => theme.palette.primary.main }}
			>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</Box>
		</Grid>
	);
}

export default App;
