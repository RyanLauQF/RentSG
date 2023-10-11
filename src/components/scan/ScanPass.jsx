import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import Webcam from 'react-webcam';

export default function ScanPass() {
  return (
    <Stack spacing={4} direction="column" align-items="center" m={2}>
      <Stack item>
        <Box
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'h5.fontSize',
          }}
        >
          Scan Your Pass
        </Box>
      </Stack>
      <Stack item>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Webcam
            mirrored="true"
            width={350} // Adjust the preferred width as needed
            height={197} // Adjust the preferred height as needed
            videoConstraints={{
              facingMode: 'environment',
            }}
            screenshotFormat="image/jpeg"
            style={{ objectFit: 'cover', borderRadius: '5%', border: 1 }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
