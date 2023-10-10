import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import WebcamViewer from './WebcamViewer';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// const videoBox = styled('Container')(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//   },
//   [theme.breakpoints.up('md')]: {
//     width: '382px',
//   },
//   justifyContent: "center",
//       height:"100%",
//       mx:"auto",

// }));

  

const Face2 = () => {
  return (
    <Container sx={{ mx: 'auto', justifyContent: 'center' }}>
      <Stack
        spacing={2}
        direction="column"
        justifyContent={'center'}
        align-items="center"
      >
        <Stack item>
          <Box
            sx={{
              mx: 'auto',
              p: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h5.fontSize',
            }}
          >
            Scan Tenant's Face
          </Box>
        </Stack>
        <Stack item>
          {/* <Box
            sx={{ mx: 'auto', width: 200, p: 1, m: 1, borderRadius: '10px' }}
          >
            <CustomWebcam />
          </Box> */}
          <WebcamViewer />
          <Box
            sx={{
              height: '100%',
              width: '100%',
              border: '1px dashed grey',
              zIndex: 'tooltip',
              borderRadius: '50%',
              position: 'absolute',
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Face2;
