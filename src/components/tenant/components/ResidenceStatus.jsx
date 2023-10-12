// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ResidenceStatusTheme = styled(Paper)(() => ({
  textAlign: 'center',
  backgroundColor: '#ffc9c9',
  height: 60,
  lineHeight: '60px',
}));

export default function ResidenceStatus({ residence }) {
  return (
    <Card sx={{ borderRadius: '10px', m: 2, px: 1 }}>
      <CardContent>
        <Typography variant="h6">Residence Status</Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }} />
        {residence.hasResidence ? (
          <Box>
            <Box px={1} py={1.2}>
              <Typography variant="subtitle2">Address:</Typography>
              <Typography variant="body1">{residence.residenceAddress}</Typography>
            </Box>
            <Box px={1} py={1.2}>
              <Typography variant="subtitle2">End of Lease:</Typography>
              <Typography variant="body1">{residence.leaseExpiry}</Typography>
            </Box>
            <ResidenceStatusTheme>Please move out now.</ResidenceStatusTheme>
          </Box>
        ) : (
          <Box px={1} py={1.2}>
            <Typography variant="body1" sx={{ textAlign: 'center', p: 3.5 }}>
              No registered residence.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
