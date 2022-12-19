import React from 'react';
import { Stack, Typography } from '@mui/material';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import Logo from '../images/undraw_friends_r511.svg';
import '../styles/Navbar.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ position: 'sticky', backgroundColor: '#ebf9ff', top: 0 }}
      className='navbar'
      p={3}>
      <Link to={'/'}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={1}
          justifyContent='center'>
          <img src={Logo} alt='Logo' height={45} className='logo' />
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{ fontSize: { xs: 16, sm: 18 } }}>
            ANIMAL SHELTER
          </Typography>
        </Stack>
      </Link>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing={3}>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          to={'/'}>
          Home
        </NavLink>

        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
          Contact Us
        </NavLink>
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing={3}
        sx={{ mr: { sm: 0, lg: 5 } }}>
        <img src={linkedin} alt='Linkedin' height={19} className='social' />
        <img src={twitter} alt='twitter' height={16} className='social' />
        <img src={instagram} alt='Instagram' height={19} className='social' />
      </Stack>
    </Stack>
  );
};

export default Navbar;
