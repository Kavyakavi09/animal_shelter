import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import DogCat from '../images/dogcat.png';
import { Link } from 'react-router-dom';

const Adopt = () => {
  return (
    <Stack direction='column' spacing={3}>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        alignItems='center'
        justifyContent='space-between'>
        <Stack>
          <Typography
            variant='h6'
            fontWeight={400}
            fontSize='24px'
            lineHeight='48px'
            letterSpacing={0.5}>
            Welcome to the Animal Shelter !
          </Typography>
          <Typography
            variant='h7'
            fontWeight={400}
            textAlign='left '
            fontSize='16px'
            lineHeight='30px'
            letterSpacing={0.5}
            fontFamily='Lato'
            mt={1}
            width={{ md: '500px', xs: '100%' }}>
            Glad that you care for the animals so much. We make sure that you'll
            not repent your decision of adopting your favorite pet !!
          </Typography>
        </Stack>
        <img
          src={DogCat}
          className='DogCat'
          alt='DogCat'
          height={130}
          style={{ marginTop: '15px' }}
        />
      </Stack>
      <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
        <Link to={'/adopt'}>
          <Button
            variant='contained'
            fullWidth
            color='primary'
            sx={{ color: '#fff', textTransform: 'capitalize' }}>
            Adopt
          </Button>
        </Link>
        <Link to={'/allpets'}>
          <Button
            variant='outlined'
            fullWidth
            color='secondary'
            sx={{ textTransform: 'capitalize' }}>
            What all pets do we have ?
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Adopt;
