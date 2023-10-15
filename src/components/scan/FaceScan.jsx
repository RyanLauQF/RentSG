import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Webcam from 'react-webcam';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FaceScan({ account }) {
  const { ownerId, residenceId } = useParams();
  const navigate = useNavigate();
  let result = '';
  const location = useLocation();
  if (account === 'owner') {
    result = location.state.result;
  }

  delay(5000).then(() => {
    if (account === 'tenant') {
      navigate('/tenant/onboard/verify/success/');
    } else if (account === 'owner') {
      navigate(`/owner/add-tenant/${ownerId}/${residenceId}/verify/`, {
        state: {
          result,
        },
      });
    }
  });

  return (
    <Stack
      spacing={4}
      direction="column"
      m={2}
      paddingTop={5}
      align-items="center"
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
          {account === 'tenant' ? 'Scan Your Face' : 'Scan Their Face'}
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
            height={600} // Adjust the preferred height as needed
            videoConstraints={{
              facingMode: 'user',
            }}
            screenshotFormat="image/jpeg"
            style={{ objectFit: 'cover', borderRadius: '5%' }}
          />

          <Box
            sx={{
              height: '500px',
              width: '300px',
              border: '3px dashed grey',

              borderRadius: '50%',
              position: 'absolute',
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
