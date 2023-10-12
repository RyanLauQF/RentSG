import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function PassStatus(pass) {
  return (
    <Box sx={{ py: 2 }}>
      <Stack
        direction="row"
        sx={{ px: 3, justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant="h6">Pass Status </Typography>
        {pass ? (
          <Stack direction="row">
            <Typography sx={{ color: 'green' }}>Valid</Typography>
            <CheckCircleIcon sx={{ color: 'green' }} />
          </Stack>
        ) : (
          <Stack direction="row">
            <Typography sx={{ color: 'red' }}>Invalid</Typography>
            <CancelIcon sx={{ color: 'red' }} />
          </Stack>
        )}
      </Stack>
      <Card sx={{ borderRadius: '10px', height: 150, m: 2 }}>
        <CardContent>
          <Typography>card info</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// const PassStatusTheme = styled(Paper)(({ children }) => ({
//   textAlign: 'center',
//   backgroundColor: children === 'Expired' ? '#ffc9c9' : 'green',
//   height: 60,
//   lineHeight: '60px',
//   padding: 3,
// }));

// function Profile() {
//   const navigate = useNavigate();

//   const checkProfile = () => {
//     navigate('profile');
//   };
//   return (
//     <IconButton onClick={checkProfile}>
//       <Avatar sx={{ color: 'primary.main' }}>
//         <PersonIcon />
//       </Avatar>
//     </IconButton>
//   );
// }

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
