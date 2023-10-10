import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

export default function ProfilePicture() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ pt: 3 }}
    >
      <Paper
        sx={{
          width: 128,
          height: 128,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PersonIcon
          sx={{
            width: 128,
            height: 128,
            alignContent: 'center',
            color: 'primary.main',
          }}
        />
      </Paper>
    </Box>
  );
}
