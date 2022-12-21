import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import Logo from '../images/undraw_friends_r511.svg';
import '../styles/Navbar.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [expandNavbar, setExpandNavbar] = useState(false);
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='nav-top'>
        <div className='linksim nav-img'>
          <Link to={'/'}>
            <img src={Logo} alt='Logo' height={45} className='logo' />
          </Link>
          <Link to={'/'}>
            <Typography
              variant='h5'
              fontWeight={700}
              sx={{ fontSize: { xs: 14, md: 18 } }}>
              ANIMAL SHELTER
            </Typography>
          </Link>
        </div>
        <div className='toggleButton'>
          <button onClick={() => setExpandNavbar(!expandNavbar)}>
            <ReorderIcon />
          </button>
        </div>
      </div>

      <div className='top-container'>
        <div className='linksimg'>
          <Link to={'/'}>
            <img src={Logo} alt='Logo' height={45} className='logo' />
          </Link>
          <Link to={'/'}>
            <Typography variant='h5' fontWeight={700} sx={{ fontSize: 18 }}>
              ANIMAL SHELTER
            </Typography>
          </Link>
        </div>

        <div className='links links-nav'>
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
        </div>
        <div className='links'>
          <img src={linkedin} alt='Linkedin' height={19} className='social' />
          <img src={twitter} alt='twitter' height={16} className='social' />
          <img src={instagram} alt='Instagram' height={19} className='social' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
