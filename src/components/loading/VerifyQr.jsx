import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function VerifyQr() {
  const navigate = useNavigate();

  delay(3000).then(() => {
    navigate('failure');
  });

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
