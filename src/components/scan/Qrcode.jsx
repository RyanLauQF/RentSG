import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useZxing } from 'react-zxing';

export default function QrScanner() {
  const navigate = useNavigate();
  const [result, setResult] = useState('');
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      navigate('verifyQr');
    },
    constraints: {
      audio: false,
      video: {
        facingMode: 'environment',
        width: 380,
        height: 380,
      },
    },
  });

  return (
    <Stack
      spacing={2}
      direction="column"
      align-items="center"
      mx="auto"
      mt="50"
    >
      <Stack item>
        <Box
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'h5.fontSize',
          }}
        >
          Scan Tenant's QR
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
          <video ref={ref} style={{ transform: 'scaleX(-1)' }} />
          <Box
            sx={{
              height: '300px',
              width: '300px',
              border: '3px dashed grey',
              position: 'absolute',
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
