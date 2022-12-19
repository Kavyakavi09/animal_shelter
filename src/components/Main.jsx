import { Stack } from '@mui/material';
import React from 'react';
import Adopt from './Adopt';
import GiveAway from './GiveAway';

const Main = () => {
  return (
    <Stack direction='column' spacing={5} mt={5} p={6} className='main'>
      <Adopt />
      <GiveAway />
    </Stack>
  );
};

export default Main;
