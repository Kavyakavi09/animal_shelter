import {
  Stack,
  Typography,
  Box,
  Button,
  Container,
  Divider,
} from '@mui/material';
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
      sx={{
        backgroundColor: '#131313',
        minWidth: '100%',
      }}>
      <Container fixed>
        <Box className='footer-cont'>
          <Box className='footer-item-container'>
            <Box>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
                justifyContent='flex-start'>
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
                fontSize='12px'
                lineHeight='20px'
                letterSpacing={0.5}
                fontFamily='Poppins'
                sx={{ color: '#9CA3AF', width: '400px', my: 2 }}>
                One of the best animal shelter places in India. We’re recognized
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
                  sx={{ fontSize: 12, color: '#9CA3AF', width: '400px' }}>
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
                  sx={{ fontSize: 12, color: '#9CA3AF' }}>
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
              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{ fontSize: 12, color: '#9CA3AF', cursor: 'pointer' }}>
                Home
              </Typography>
              <Typography
                variant='body2'
                fontWeight={300}
                fontFamily='Poppins'
                lineHeight='18px'
                letterSpacing={0.5}
                sx={{ fontSize: 12, color: '#9CA3AF', cursor: 'pointer' }}>
                Contact Us
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ background: '#374151', mt: 4, mb: 2 }} />
          <Stack direction='row' justifyContent='space-between'>
            <Typography
              variant='body2'
              fontSize='10px'
              sx={{ color: '#6B7280' }}>
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
      </Container>
    </Box>
  );
};

export default Footer;
