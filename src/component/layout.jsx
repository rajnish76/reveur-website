import React, { useState } from 'react';
import {
	CssBaseline,
	Fab,
	Zoom,
	Box,
	AppBar,
	Stack,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
	useScrollTrigger,
	IconButton,
	Grid
} from '@mui/material';
import classNames from 'classnames';
import { styled } from '@mui/system';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

import style from './layout.scss';

const menu = ['Home', 'Services', 'Products', 'About', 'Testimonial', 'Blog', 'Contact'];

const FHeader = styled('div')({
	color: 'white',
	marginBottom: 40,
	fontSize: 22,
	fontWeight: 600
});

const FText = styled('div')({
	color: 'rgba(255, 255, 255, 0.7)',
	marginBottom: '13px',
	cursor: 'pointer'
});

const Layout = ({ children }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [value, setValue] = useState();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<CssBaseline />
			<AppBar sx={{ background: '#fff', boxShadow: '0 0 5px 0 rgb(0 0 0 / 10%)' }}>
				<Toolbar variant='regular' sx={{ justifyContent: 'space-between' }}>
					<AddBusinessRoundedIcon sx={{ transform: 'scale(1.5)', marginLeft: '10px' }} />
					{isMatch ? (
						<>
							<Typography sx={{ fontSize: '22px', paddingLeft: '10%' }}>Shoppee</Typography>
							<Stack
								direction='row'
								sx={{ alignItems: 'center', cursor: 'pointer' }}
								onClick={() => setOpenDrawer(!openDrawer)}>
								<IconButton sx={{ color: 'black', marginLeft: 'auto' }}>
									<MenuIcon color='black' />
								</IconButton>
								<Typography>Menu</Typography>
							</Stack>
						</>
					) : (
						<Stack direction='row' spacing={1}>
							<MenuList value={value} setValue={setValue} customStyle={{ margin: '6px 15px' }} />
						</Stack>
					)}
				</Toolbar>
				{openDrawer && (
					<Stack direction='column' ml='25px' spacing={1} pb='10px' className={style['bottom-drawer']}>
						<MenuList setOpenDrawer={setOpenDrawer} value={value} setValue={setValue} customStyle={{ marginBottom: '8px' }} />
					</Stack>
				)}
			</AppBar>
			<Toolbar id='back-to-top-anchor' />
			{children}
			<Box className={style['footer']}>
				<Grid container spacing={2} className={style['footer-container']}>
					<Grid item xs={12} md={4}>
						<FHeader>About Reveur</FHeader>
						<FText>
							Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
							texts.
						</FText>
					</Grid>
					<Grid item xs={6} md={2}>
						<FHeader>Links</FHeader>
						{menu.map(item => {
							const color = value === item ? '#31de79' : 'rgba(255, 255, 255, 0.7)';
							return (
								<Stack direction='row' key={item} onClick={() => setValue(item)}>
									<ArrowRightIcon sx={{ transform: 'scale(1)', marginRight: '10px' }} />
									<FText key={item} sx={{ color }}>
										{item}
									</FText>
								</Stack>
							);
						})}
					</Grid>
					<Grid item xs={6} md={2}>
						<FHeader>Services</FHeader>
						{menu.map(item => {
							return (
								<Stack direction='row' key={item}>
									<ArrowRightIcon sx={{ transform: 'scale(1)', marginRight: '10px' }} />
									<FText key={item}>{item}</FText>
								</Stack>
							);
						})}
					</Grid>
					<Grid item xs={12} md={4}>
						<FHeader>Have a Questions?</FHeader>
						<Stack direction='row'>
							<LocationOnIcon sx={{ transform: 'scale(1)', marginRight: '10px' }} />
							<FText>203 Fake St. Mountain View, San Francisco, California, USA</FText>
						</Stack>
						<Stack direction='row'>
							<PhoneIcon sx={{ transform: 'scale(1)', marginRight: '10px' }} />
							<FText>+2 392 3929 210</FText>
						</Stack>
						<Stack direction='row'>
							<LocalPostOfficeIcon sx={{ transform: 'scale(1)', marginRight: '10px' }} />
							<FText>info@yourdomain.com</FText>
						</Stack>
					</Grid>
				</Grid>
			</Box>
			<ScrollTop>
				<Fab color='secondary' size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</>
	);
};

const ScrollTop = props => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100
	});

	const handleClick = event => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 16, right: 16 }}>
				{children}
			</Box>
		</Zoom>
	);
};

const MenuList = ({ setOpenDrawer = () => {}, value, setValue, customStyle = {} }) => {
	return (
		<>
			{menu.map(item => (
				<span key={item} style={{ ...customStyle }}>
					<span
						onClick={() => {
							setValue(item);
							setOpenDrawer(pre => !pre);
						}}
						className={classNames(style['menu-item'], item === value ? style['menu-item-active'] : '')}>
						{item}
					</span>
				</span>
			))}
		</>
	);
};

export default Layout;
