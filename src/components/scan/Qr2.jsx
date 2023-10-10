import { useState } from 'react';
import { useZxing } from 'react-zxing';
import VerifyQr from '../loading/VerifyQr';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Qr2  () {
  const [result, setResult] = useState(null);
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
    constraints: {video:{facingMode:'environment'}, audio:'false', mirrored:'true'}
  });


    return (
        <Container sx={{ maxWidth: 'sm', mx:'auto', justifyContent: 'center'}}>
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
                Scan Profile QR
              </Box>
            </Stack>
            <Stack item>
              {result ? <VerifyQr/> : <video ref={ref}/>}
            </Stack>
          </Stack>
        </Container>
      );
};

export default Qr2;