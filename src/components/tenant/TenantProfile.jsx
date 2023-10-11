import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles'; // Import ThemeProvider from Material-UI
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={goBack} sx={{ padding: 2 }}>
      <ArrowBackIcon />
    </IconButton>
  );
}

function TenantDetail({ det, value }) {
  return (
    <Box px={4} py={1.2}>
      <Typography variant="subtitle2">{det}:</Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

function TenantDetails() {
  const details = [
    {
      key: 'Name',
      value: 'John Doe',
    },
    {
      key: 'FIN',
      value: '123456789',
    },
    {
      key: 'Pass Expiry',
      value: '30-9-2023',
    },
    {
      key: 'Nationality',
      value: 'American',
    },
  ];
  return (
    <Box>
      {details.map((detail) => (
        <TenantDetail det={detail.key} value={detail.value} />
      ))}
    </Box>
  );
}

export default function TenantProfilePage() {
  return (
    <>
      <BackButton />
      <Typography variant="h6" sx={{ px: 3 }}>
        Profile
      </Typography>
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
      />
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
      <TenantDetails />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" sx={{ pt: 2 }}>
          Use this to connect with a landlord:
        </Typography>
        <Typography sx={{ pt: 9 }}>qrcode</Typography>
      </Box>
    </>
  );
}
