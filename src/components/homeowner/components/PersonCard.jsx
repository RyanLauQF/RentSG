import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonCard(props) {
  const colour = props.isPassExpiryValid;

  const navigate = useNavigate();
  const navigateToViewProfile = () => {
    navigate('/tenant');
  };

  const name = `${props.firstName} ${props.lastName}`;

  return (
    <Card
      sx={{ backgroundColor: colour, m: 2, borderRadius: '10px' }}
      height="100vh"
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Tooltip title="Tenants Profile">
            <Avatar
              sx={{
                width: 65,
                height: 65,
                alignContent: 'center',
              }}
              alt={props.firstName}
              src={props.image}
            />
          </Tooltip>

          <Stack direction="column">
            <Typography variant="body1">{name}</Typography>
            <Typography variant="subtitle2">
              Last day: {props.leaseExpiry}
            </Typography>
            <Typography variant="subtitle2">
              Expiry date: {props.passExpiry}
            </Typography>
          </Stack>
          <IconButton
            onClick={() => alert('delete')}
            sx={{ marginRight: 1, marginTop: 1 }}
          >
            <CloseIcon sx={{ height: 0.7, marginRight: -2 }} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
    // <ThemeProvider>
    //   <Box m={2}>
    //     <Card
    //       sx={{
    //         minWidth: 275,
    //         height: '10rem',
    //         boxShadow: 4,
    //         borderRadius: 6,
    //         p: 2,
    //       }}
    //       style={{ backgroundColor: colour }}
    //     >
    //       <CardContent
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Tooltip title="Tenant's Profile">
    //           <div
    //             style={{
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <Avatar
    //               alt={props.firstName}
    //               src={props.image}
    //               style={{ marginRight: '1rem' }}
    //             />
    //             <Typography variant="h6" textAlign="center">
    //               {name}
    //             </Typography>
    //           </div>
    //         </Tooltip>
    //         {/* <Typography variant="body2" textAlign="center" mt="2rem"> */}
    //         <Box>Lease Expiry Date: {props.leaseExpiry}</Box>
    //         {/* </Typography> */}
    //         <Typography variant="body2" textAlign="center">
    //           Pass Expiry Date: {props.passExpiry}
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   </Box>
    // </ThemeProvider>
  );
}
