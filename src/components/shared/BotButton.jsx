import SmartToyIcon from '@mui/icons-material/SmartToy';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BotButton() {
  const navigate = useNavigate();
  const handleNavChatPage = () => {
    navigate('/chatpage');
  };
  return (
    <Box sx={{ heighttransform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        onClick={handleNavChatPage}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 35, right: 16 }}
        icon={<SmartToyIcon sx={{ color: '#d9ecf2' }} />}
      />
    </Box>
  );
}
