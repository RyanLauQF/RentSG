import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const ResidenceStatusTheme = styled(Paper)(() => ({
  textAlign: 'center',
  backgroundColor: '#ffc9c9',
  height: 60,
  lineHeight: '60px',
  padding: 3,
}));

const PassStatusTheme = styled(Paper)(({ children }) => ({
  textAlign: 'center',
  backgroundColor: children === 'Expired' ? '#ffc9c9' : 'green',
  height: 60,
  lineHeight: '60px',
  padding: 3,
}));

function Header() {
  return <Typography variant="h5">Welcome Back, John!</Typography>;
}

function Profile() {
  const navigate = useNavigate();

  const checkProfile = () => {
    navigate('profile');
  };
  return (
    <IconButton onClick={checkProfile}>
      <Avatar sx={{ color: 'primary.main' }}>
        <PersonIcon />
      </Avatar>
    </IconButton>
  );
}

// function PassStatus() {
//   return (
//     <Card sx={{ borderRadius: '10px', m: 2 }}>
//       <CardContent>
//         <Typography variant="h6">
//           Pass Status
//         </Typography>
//         <Divider
//           variant="middle"
//           sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
//         />
//         <PassStatusTheme children="Expired" />
//       </CardContent>
//     </Card>
//   );
// }
function PassStatus() {
  return (
    <Box sx={{ py: 2 }}>
      <Stack direction="row" sx={{ px: 3, justifyContent: 'space-between' }}>
        <Typography>Pass Status: </Typography>
        <Stack direction="row">
          <Typography sx={{ color: 'green' }}>Valid</Typography>
          <CheckCircleIcon sx={{ color: 'green' }} />
        </Stack>
      </Stack>
      <Card sx={{ borderRadius: '10px', height: 150, m: 2 }}>
        <CardContent>
          <Typography>card info</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

function ResidenceStatus() {
  return (
    <Card sx={{ borderRadius: '10px', m: 2 }}>
      <CardContent>
        <Typography variant="h6">Residence Status</Typography>
        <Divider
          variant="middle"
          sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
        />
        <Typography variant="body2">Address: Binjai Hall #19</Typography>
        <Typography variant="body2">End of Lease: 03/01/2024</Typography>
        <ResidenceStatusTheme>
          0 days. Please move out now.
        </ResidenceStatusTheme>
      </CardContent>
      {/* <CardActions>
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
      </CardActions> */}
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
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Header />
        <Profile />
      </Stack>
      <Box sx={{ width: '98%' }}>
        <PassStatus />
        <ResidenceStatus />
        <ChatBot />
      </Box>
    </Box>
  );
}

export default TenantPage;

// tenant
// {
//   "name": "Ahn Yujin",
//   "finNumber": "123456789",
//   "nationality": "Korean",
//   "QRcode": // this one not v sure
//   "imageUrl": "https://onecms-res.cloudinary.com/image/upload/s--4SDj7ump--/f_auto,q_auto/v1/mediacorp/tdy/image/2022/07/24/20220617_llt_uncle_raymond-3.jpg?itok=PT3Sdazu",
//   "pass": {
//     "valid": true,
//     "passExpiry": "25-06-2028",
//     "passType": "FIN"
//   }
//   "lease": {
//     "hasResidence": true,
//     "residenceAdress": "Binjai Hall",
//     "leaseExpiry": "23-06-2028",
//   }
// }, {
//   "name": "Jang Wonyoung",
//   "finNumber": "123456789",
//   "nationality": "Korean",
//   "imageUrl": "https://onecms-res.cloudinary.com/image/upload/s--4SDj7ump--/f_auto,q_auto/v1/mediacorp/tdy/image/2022/07/24/20220617_llt_uncle_raymond-3.jpg?itok=PT3Sdazu",
//   "pass" : {
//     "valid": false,
//     "passExpiry": "19-02-2008",  // past expiry date
//     "passType": "FIN"
//   }
//   "lease": {
//     "hasResidence": false, // invalid lease
//   }
// }

// homeowner
// {
//   "name": "Karen Low",
//   "nric": "S12345678A",
//   "nok": "Sarah Low",
//   "nokContact": "81234567",
//   "residence": {
//     "Binjai Hall #19":
//     {
//       "type": "4-room HDB",
//       "availability": 1,
//       "tenants": {
//       // pass in the tenant objects
//       }
//     },

//     "Tanjong Hall #20":
//     {
//       "type": "3-room HDB",
//       "availability": 2,
//       "tenants": {
//       // pass in the tenant objects
//       }
//     },
//   }
// }
