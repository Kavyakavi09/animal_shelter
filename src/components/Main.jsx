import { Stack } from '@mui/material';
import React from 'react';
import Adopt from './Adopt';
import GiveAway from './GiveAway';
import '../styles/Main.css';

const Main = () => {
  return (
    <Stack direction='column' spacing={5} className='main'>
      <Adopt />
      <GiveAway />
    </Stack>
  );
};

export default Main;
