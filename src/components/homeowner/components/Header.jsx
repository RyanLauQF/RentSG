import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Header(props) {
  return (
    <AppBar position="static" sx={{ color: 'primary.main', height: 80 }}>
      <Typography variant="h5" sx={{ py: 3, px: 2, color: 'white' }}>
        Welcome Back, {props.name}!
      </Typography>
    </AppBar>
  );
}
