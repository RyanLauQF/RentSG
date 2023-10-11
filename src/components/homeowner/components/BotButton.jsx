import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import * as React from 'react';

export default function BotButton() {
  return (
    <Box sx={{ heighttransform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<HeadsetMicIcon />}
      />
    </Box>
  );
}
