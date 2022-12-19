import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

import PlayImage from '../images/undraw_playing_fetch_cm19.svg';
import { Link } from 'react-router-dom';

const GiveAway = () => {
  return (
    <Stack direction='column' spacing={5} p={1}>
      <Stack direction='column' spacing={2} alignItems='flex-end'>
        <Typography
          variant='h6'
          fontWeight={400}
          fontSize='24px'
          lineHeight='48px'
          letterSpacing={0.5}>
          We do take in pets if you can't take care of them !
        </Typography>
        <Typography
          variant='h7'
          fontWeight={400}
          fontSize='16px'
          lineHeight='30px'
          letterSpacing={0.5}
          fontFamily='Lato'
          textAlign='right'
          width='98%'>
          Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
          efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf
          uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe
          fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes
          efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
        </Typography>

        <Link to={'/giveaway'}>
          <Button
            variant='outlined'
            color='secondary'
            sx={{ textTransform: 'capitalize' }}>
            Give Away
          </Button>
        </Link>
      </Stack>
      <Stack direction='row' spacing={4} p={2}>
        <img src={PlayImage} alt='PlayImage' height={130} />
        <Typography
          variant='h7'
          fontWeight={400}
          fontSize='16px'
          lineHeight='30px'
          letterSpacing={0.5}
          fontFamily='Lato'>
          Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
          efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf
          uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe
          fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes
          efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
        </Typography>
      </Stack>
    </Stack>
  );
};

export default GiveAway;
