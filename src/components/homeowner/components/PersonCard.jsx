import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import createTheme from '@mui/system/createTheme';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function PersonCard(props) {
  const colour = props.isPassExpiryValid;

  const navigate = useNavigate();
  const navigateToViewProfile = () => {
    navigate('/tenant');
  };

  const name = `${props.firstName} ${props.lastName}`;
  return (
    <ThemeProvider theme={theme}>
      <Box m={2}>
        <Card
          sx={{
            minWidth: 275,
            height: '10',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
          }}
          style={{ backgroundColor: colour }}
        >
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Tooltip title="Tenant's Profile">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  alt={props.firstName}
                  src={props.image}
                  style={{ marginRight: '1rem' }}
                />
                <Typography variant="h6" textAlign="center">
                  {name}
                </Typography>
              </div>
            </Tooltip>
            {/* <Typography variant="body2" textAlign="center" mt="2rem"> */}
            <Box>Lease Expiry Date: {props.leaseExpiry}</Box>
            {/* </Typography> */}
            <Typography variant="body2" textAlign="center">
              Pass Expiry Date: {props.passExpiry}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
