import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export interface IGameDeckProps {}

export default function GameDeck(props: IGameDeckProps) {
  useEffect(() => {
    window.location.replace('https://www.dropbox.com/s/n6x01186q84lr66/Gamedeck.pdf?dl=0');
  }, []);
  return (
    <Box
      component="div"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(#34263b, #01091f)',
      }}
    >
      <Box
        component="div"
        sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', m: 'auto' }}
      >
        <Typography
          component="h1"
          fontSize={{ xs: '4rem', md: '6rem' }}
          lineHeight={{ xs: '4.4rem', md: '6.4rem' }}
          sx={{ color: 'var(--white)', m: 'auto' }}
        >
          Redirecting...
        </Typography>
      </Box>
    </Box>
  );
}
