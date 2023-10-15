import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useZxing } from 'react-zxing';

export default function QrScanner() {
  const navigate = useNavigate();
  const { ownerId, residenceId } = useParams();
  const [result, setResult] = useState('');
  const { ref } = useZxing({
    onDecodeResult(qrData) {
      setResult(qrData.getText());
      console.log(qrData.getText());
    },
    constraints: {
      audio: false,
      video: {
        facingMode: 'environment',
        width: 380,
        height: 600,
      },
    },
  });

  useEffect(() => {
    if (result) {
      navigate(`/owner/add-tenant/${ownerId}/${residenceId}/face/`, {
        state: {
          result,
        },
      });
    }
  }, [result, residenceId, navigate, ownerId]);

  return (
    <Stack
      spacing={2}
      direction="column"
      align-items="center"
      mx="20px"
      mt="50px"
    >
      <Stack item>
        <Box
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'h5.fontSize',
            color: 'primary.main',
          }}
        >
          Scan Tenant's QR
        </Box>
      </Stack>
      <Stack item borderRadius={3} overflow="hidden">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <video ref={ref} />
          <Box
            sx={{
              height: '300px',
              width: '300px',
              border: '3px dashed white',
              position: 'absolute',
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
