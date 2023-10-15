import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';

import db from '../../config/firebase';
import BotButton from '../shared/BotButton';
import BottomNavigation from '../shared/BottomNavBar';
import Header from '../shared/Header';
import timeDiffConverter from '../shared/TimeDifferenceConverter';
import AddPerson from './components/AddPerson';
import PersonCard from './components/PersonCard';

function calculateRemainingDays(passExpiry, leaseExpiry) {
  const timeDiffPass = timeDiffConverter(passExpiry);
  const timeDiffLease = timeDiffConverter(leaseExpiry);
  let timeDifference;
  if (timeDiffPass < timeDiffLease) {
    timeDifference = timeDiffPass;
  } else {
    timeDifference = timeDiffLease;
  }
  const daysRemain = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysRemain;
}

export default function HomeOwnerPage({ ownerID }) {
  const [ownerInfo, setOwnerInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/owners/${ownerID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setOwnerInfo(info);
      }
    });
  }, [ownerID]);

  return (
    <>
      <Header name={ownerInfo.firstName} />
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
      />
      <Box sx={{ pb: 7 }}>
        {ownerInfo.residences ? (
          Object.entries(ownerInfo.residences).map(([id, residence]) => (
            <Box key={residence.residenceName} m="1rem">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Typography
                  variant="body2"
                  marginLeft="1rem"
                  fontWeight="bold"
                  fontSize="h6.fontSize"
                  color="primary.main"
                >
                  {residence.residenceName}
                </Typography>
                <Typography
                  variant="body2"
                  marginRight="1rem"
                  fontWeight="bold"
                  color="primary.main"
                >
                  {residence.type}
                </Typography>
              </Stack>
              {Object.entries(residence.tenants)
                .sort(
                  ([, a], [, b]) =>
                    calculateRemainingDays(a.passExpiry, a.leaseExpiry) -
                    calculateRemainingDays(b.passExpiry, b.leaseExpiry)
                )
                .map(([tenantID, details]) => (
                  <PersonCard personID={tenantID} residenceID={id} />
                ))}
              <AddPerson ownerID={ownerID} residenceID={id} />
            </Box>
          ))
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
          >
            <CircularProgress
              size={50}
              sx={{
                position: 'relative',
                mx: 'auto',
              }}
            />
          </Box>
        )}
      </Box>
      <BotButton />
      <BottomNavigation account="owner" />
    </>
  );
}
