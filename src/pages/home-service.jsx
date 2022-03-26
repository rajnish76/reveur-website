import { Box, Grid } from '@mui/material';
import React from 'react';

import style from './home-service.scss';

const HomeService = () => {
	return (
		<>
			<Grid container className={style['home']}>
				<Grid item xs={12} md={6}>
					<Box>Welcome to Reveur</Box>
					<Box>Small Details Make A Big <span>Impression</span></Box>
					<Box>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					backP
				</Grid>
			</Grid>
			{[...new Array(20)]
				.map(
					() => `Cras mattis consectetur purus sit amet fermentum.
							Cras justo odio, dapibus ac facilisis in, egestas eget quam.
							Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
				)
				.join('\n')}
		</>
	);
};

export default HomeService;
