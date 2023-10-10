import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function VerifyQr() {
  return (
    <Container align-items="center" mx="auto">
      <Stack
        spacing={2}
        direction="column"
        justifyContent={'center'}
        align-items="center"
      >
        <Stack item textAlign="center">
          <h1>Verifying profile...</h1>
        </Stack>
        <Stack item>
          <CircularProgress size={50} 
          sx={{
              position: 'relative',
              mx: 'auto'
            }}/>
        </Stack>
      </Stack>
    </Container>
  );
}

export default VerifyQr;
