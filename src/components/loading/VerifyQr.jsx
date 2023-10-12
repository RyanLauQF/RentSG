import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import React from 'react';

function VerifyQr() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Stack
        spacing={4}
        direction="column"
        justifyContent="center"
        align-items="center"
      >
        <Stack item textAlign="center">
          <h1>Verifying profile...</h1>
        </Stack>
        <Stack item>
          <CircularProgress
            size={50}
            sx={{
              position: 'relative',
              mx: 'auto',
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default VerifyQr;
