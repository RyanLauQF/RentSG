import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const ResidenceStatusTheme = styled(Paper)(() => ({
  textAlign: 'center',
  backgroundColor: '#ffc9c9',
  height: 60,
  lineHeight: '60px',
}));

const PassStatusTheme = styled(Paper)(({ children }) => ({
  textAlign: 'center',
  backgroundColor: children === 'Expired' ? '#ffc9c9' : 'green',
  height: 60,
  lineHeight: '60px',
}));

function Header() {
  return (
    <Typography variant="h5" sx={{ color: '#1aa6b7' }}>
      Welcome Back, John!
    </Typography>
  );
}

function Profile() {
  const navigate = useNavigate();

  const checkProfile = () => {
    navigate('profile');
  };
  return (
    <IconButton onClick={checkProfile}>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </IconButton>
  );
}

function PassStatus() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#1aa6b7' }}>
          Pass Status
        </Typography>
        <PassStatusTheme children="Expired" />
      </CardContent>
    </Card>
  );
}

function ResidenceStatus() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#1aa6b7' }}>
          Residence Status
        </Typography>
        <Typography variant="body2">Address: Binjai Hall #19</Typography>
        <Typography variant="body2">End of Lease: 03/01/2024</Typography>
        <ResidenceStatusTheme children="0 days. Please move out now." />
      </CardContent>
      <CardActions>
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              alert('moved out');
            }}
          >
            <Typography>Moved out</Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

function ChatBot() {
  return (
    <Button variant="contained">
      <HeadsetMicIcon />
    </Button>
  );
}

function TenantPage() {
  return (
    <Box p={2}>
      <Stack direction="row" useFlexGap>
        <Header />
        <Profile />
      </Stack>
      <PassStatus />
      <ResidenceStatus />
      <ChatBot />
    </Box>
  );
}

export default TenantPage;
