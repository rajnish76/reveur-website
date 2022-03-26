import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from '../component/layout';

import './app.scss';
import HomeService from './home-service';

const theme = createTheme({
	palette: {
		secondary: {
			main: '#31de79'
		}
	}
});

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Layout>
					<HomeService />
				</Layout>
			</ThemeProvider>
		</>
	);
};

export default App;
