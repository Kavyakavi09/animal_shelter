import { Box, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import dog from '../utils/dogs.json';
import cat from '../utils/cats.json';
import '../styles/Table.css';

const AllPets = () => {
  const [dogs, setDogs] = useState('dog');

  const handleDog = () => {
    setDogs('dog');
  };

  const handleCat = () => {
    setDogs('cat');
  };

  return (
    <div className='pets-container'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Paper elevation={3} sx={{ px: 5, py: 3, background: '#e2f4fc' }}>
          <Typography variant='h6' fontWeight={700} mb={2}>
            What all pets do we have ?
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Typography variant='h6' fontWeight={700}>
              <button
                className={dogs === 'dog' ? 'btn-table-border' : 'btn-table'}
                onClick={handleDog}>
                DOGS
              </button>
            </Typography>
            <span style={{ borderRight: '2px solid black' }}></span>
            <Typography variant='h6' fontWeight={700}>
              <button
                className={dogs === 'cat' ? 'btn-table-border' : 'btn-table'}
                onClick={handleCat}>
                {' '}
                CATS
              </button>
            </Typography>
          </Stack>
          <table id='pets'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Age ( months )</th>
              </tr>
            </thead>
            <tbody>
              {dogs === 'dog'
                ? dog?.map(({ id, name, breed, age }) => (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{breed}</td>
                      <td>{age}</td>
                    </tr>
                  ))
                : cat?.map(({ id, name, breed, age }) => (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{breed}</td>
                      <td>{age}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </Paper>
      </Box>
    </div>
  );
};

export default AllPets;
