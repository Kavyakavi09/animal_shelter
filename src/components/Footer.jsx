import { Stack, Typography, Box, Button, Divider } from '@mui/material';
import React from 'react';
import Logo from '../images/undraw_friends_r511.svg';
import EastIcon from '@mui/icons-material/East';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      className="foot">
      <Box className='footer-cont'>
        <Box className='footer-item-container'>
          <Box className='footer-item'>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              justifyContent={{ md: 'flex-start', xs: 'center' }}>
              <img src={Logo} alt='Logo' height={40} className='logo' />
              <Typography
                variant='h6'
                fontWeight={700}
                sx={{ fontSize: 14, color: 'white' }}>
                ANIMAL SHELTER
              </Typography>
            </Stack>

            <Typography
              variant='body2'
              fontWeight={400}
              lineHeight='20px'
              letterSpacing={0.5}
              fontFamily='Poppins'
              sx={{
                color: '#9CA3AF',
                fontSize: { xs: 10, md: 12 },
                textOverflow: 'hidden',
                my: 2,
                width: { xs: '100%', md: '400px' },
              }}>
              One of the best animal shelter places in India. We're recognized
              by the government. Please take a pledge to take care of these
              lovely pets !
            </Typography>

            <Link to={'/adopt'}>
              <Button
                variant='contained'
                color='primary'
                sx={{ color: '#fff', textTransform: 'capitalize' }}
                endIcon={<EastIcon />}>
                Adopt
              </Button>
            </Link>
          </Box>
          <Box className='footer-item'>
            <Typography
              variant='h5'
              fontWeight={600}
              fontFamily='Poppins'
              lineHeight='30px'
              letterSpacing={0.5}
              sx={{ fontSize: 14, color: 'white' }}>
              GET IN TOUCH
            </Typography>
            <Stack direction='row' spacing={1}>
              <LocationOnOutlinedIcon className='svgsocial' />

              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{
                  fontSize: { xs: 10, md: 12 },
                  color: '#9CA3AF',
                  width: { xs: '100%', md: '400px' },
                }}>
                llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                woiwemfwokm fwe w ecen cloenwo we - 355233
              </Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={1}>
              <MailOutlineOutlinedIcon className='svgsocial' />
              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{ fontSize: 10, color: '#9CA3AF' }}>
                cisubdcusb@gmail.com
              </Typography>
            </Stack>
            <Typography
              variant='h5'
              fontWeight={600}
              fontFamily='Poppins'
              lineHeight='20px'
              letterSpacing={0.5}
              sx={{ fontSize: 14, color: 'white' }}>
              FOLLOW US
            </Typography>
            <Stack direction='row' spacing={2} className='footer-svg'>
              <Twitter />
              <Facebook />
              <LinkedIn />
            </Stack>
          </Box>
          <Box className='footer-item'>
            <Typography
              variant='h5'
              fontWeight={600}
              fontFamily='Poppins'
              lineHeight='20px'
              letterSpacing={0.5}
              sx={{ fontSize: 14, color: 'white' }}>
              QUICK LINKS
            </Typography>
            <Link to={'/'}>
              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{ fontSize: 12, color: '#9CA3AF', cursor: 'pointer' }}>
                Home
              </Typography>
            </Link>
            <Link to={'/contact'}>
              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{ fontSize: 12, color: '#9CA3AF', cursor: 'pointer' }}>
                Contact Us
              </Typography>
            </Link>
          </Box>
        </Box>
        <Divider sx={{ background: '#374151', mt: 4, mb: 2, ml: 2, mr: 5 }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2 }}
          justifyContent={{
            lg: 'space-between',
            md: 'space-between',
          }}
          alignItems='flex-start'
          sx={{
            padding: { xl: '0px 180px', md: '0px 100px', sm: '0px 50px' },
          }}>
          <Typography variant='body2' fontSize='12px' sx={{ color: '#6B7280' }}>
            Copyright ©2023. Animal Shelter
          </Typography>
          <Stack direction='row' spacing={3} sx={{ cursor: 'pointer' }}>
            <Typography
              variant='body2'
              fontSize='12px'
              sx={{
                color: '#D1D5DB',
                textDecoration: 'underline',
              }}>
              Privacy Policy
            </Typography>
            <Typography
              variant='body2'
              fontSize='12px'
              sx={{ color: '#D1D5DB', textDecoration: 'underline' }}>
              Terms of Service
            </Typography>
            <Typography
              variant='body2'
              fontSize='12px'
              sx={{ color: '#D1D5DB', textDecoration: 'underline' }}>
              Cookies Settings
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
