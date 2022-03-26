import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import App from './pages/app';

render(
	<StyledEngineProvider injectFirst>
		<App />
	</StyledEngineProvider>,
	document.getElementById('root')
);
