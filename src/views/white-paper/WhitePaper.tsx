import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export interface IWhitePaperProps {}

export default function WhitePaper(props: IWhitePaperProps) {
  useEffect(() => {
    window.location.replace(
      'https://rise-of-immortals.gitbook.io/rise-of-immortals/rise-of-immortals/what-is-rise-of-immortals'
    );
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
