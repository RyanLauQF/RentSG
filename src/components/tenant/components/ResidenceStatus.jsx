import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import colourConverter from '../../shared/ColourConverter';
import timeDiffConverter from '../../shared/TimeDifferenceConverter';

const ResidenceStatusTheme = styled(Paper)(({ colour }) => ({
  display: 'flex',
  alignItems: 'center', // Center vertically
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: colour,
  minHeight: 80, // Set a minimum height
  boxShadow: 3,
}));

export default function ResidenceStatus({
  passExpiry,
  leaseExpiry,
  residence,
}) {
  const timeDiffPass = timeDiffConverter(passExpiry);
  const timeDiffLease = timeDiffConverter(leaseExpiry);

  let timeDifference;
  if (timeDiffPass < timeDiffLease) {
    timeDifference = timeDiffPass;
  } else {
    timeDifference = timeDiffLease;
  }
  const colour = colourConverter(timeDifference);
  let daysRemain = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const monthsRemain = Math.floor(daysRemain / 30);
  if (daysRemain <= 0) {
    daysRemain = 0;
  }

  return (
    <Card
      sx={{
        borderRadius: '10px',
        m: 2,
        px: 1,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6">Residence Status</Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }} />
        {residence !== 'NULL' ? (
          <Box>
            <Box px={1} py={1.2}>
              <Typography variant="subtitle2">Address:</Typography>
              <Typography variant="body1">{residence}</Typography>
            </Box>
            <Box px={1} py={1.2}>
              <Typography variant="subtitle2">End of Lease:</Typography>
              <Typography variant="body1">{leaseExpiry}</Typography>
            </Box>
            {(() => {
              if (timeDiffPass <= 0) {
                return (
                  <ResidenceStatusTheme
                    colour={colour}
                    children="Pass expired, please move out now."
                  />
                );
              }
              if (daysRemain === 0) {
                return (
                  <ResidenceStatusTheme
                    colour={colour}
                    children="Please move out now."
                  />
                );
              }
              if (daysRemain <= 90) {
                return (
                  <ResidenceStatusTheme
                    colour={colour}
                    children={`${daysRemain} days remaining`}
                  />
                );
              }
              return (
                <ResidenceStatusTheme
                  colour={colour}
                  children={`${monthsRemain} months remaining`}
                />
              );
            })()}
          </Box>
        ) : (
          <Box px={1} py={1.2}>
            <Typography variant="body1" sx={{ textAlign: 'center', p: 3.5 }}>
              No registered residence
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
